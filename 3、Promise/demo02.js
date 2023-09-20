try {
    module.exports = MyPromise
} catch (e) { }


/**
 * 自定义Promise
 * @param {Function} executor 执行器
 */
function MyPromise(executor) {

    var self = this
    // 初始状态
    self.status = "pending"
    // 初始值
    self.data = undefined

    // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
    self.onResolvedCallBack = []

    // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
    self.onRejectedCallBack = []

    function resolve(value) {
        setTimeout(() => {
            if (self.status === 'pending') {
                // 改变状态为 成功
                self.status = 'resolved'
                self.data = value
                for (let i = 0; i < self.onResolvedCallBack.length; i++) {
                    self.onResolvedCallBack[i](value)
                }
            }
        })

    }

    function reject(reason) {
        setTimeout(() => {
            if (self.status === 'pending') {
                // 改变状态为 成功
                self.status = 'rejected'
                self.data = reason
                for (let i = 0; i < self.onRejectedCallBack.length; i++) {
                    self.onRejectedCallBack[i](reason)
                }
            }
        })
    }


    // 捕获异常
    try {
        executor(resolve, reject)
    } catch (error) {
        console.error(error);
        reject(error)
    }
}



/**
 * then方法
 * @param {Function} onResolved 成功的回调函数
 * @param {Function} onReject 失败的回调函数
 */
MyPromise.prototype.then = function (onResolved, onReject) {
    // 调用当前函数的对象
    // 此时调用then方法的对象就是 MyPromise的实例
    var self = this

    var promise2

    // 如果 onResolved / onReject 不是函数 则需要处理下
    onResolved = typeof onResolved === 'function' ? onResolved : function (v) { return v }
    onReject = typeof onReject === 'function' ? onReject : function (r) { throw r }


    // 成功
    if (self.status === 'resolved') {
        // 返回一个promise对象
        return promise2 = new MyPromise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    var x = onResolved(self.data)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }


    // 失败
    if (self.status === 'rejected') {
        // 返回一个promise对象
        return promise2 = new MyPromise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    var x = onReject(self.data)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }


    // 进行中
    if (self.status === 'pending') {
        // 返回一个promise对象
        return promise2 = new MyPromise(function (resolve, reject) {
            self.onResolvedCallBack.push(function (value) {
                try {
                    var x = onResolved(value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })


            self.onRejectedCallBack.push(function (reason) {
                try {
                    var x = onReject(reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }


}


/**
 * 捕获异常的方法
 * @param {*} onRejected 
 * @returns 
 */
MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}



function resolvePromise(promise2, x, resolve, reject) {
    var then
    var thenCalledOrThrow = false


    // 标准 2.3.1  If promise and x refer to the same object, reject promise with a TypeError as the reason.
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise!'))
    }


    // 标准 2.3.2 如果x 是 promise类型
    if (x instanceof MyPromise) {
        // 2.3.2.1  If x is pending, promise must remain pending until x is fulfilled or rejected.  
        // 如果是pending状态 此时不知道到底是完成还是失败状态
        if (x.status === 'pending') {
            x.then(function (value) {
                resolvePromise(promise2, value, resolve, reject)
            }, reject)
        } else {
            // 如果状态已经确定了 那么直接取值就可以了
            x.then(resolve, reject)
        }
        return
    }

    // 标准 2.3.3 if x is an object or function,  函数或者对象
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {

        try {
            // 2.3.3.1
            then = x.then
            // 2.3.3.3 if then is a function, call it with x as this
            if (typeof then === 'function') {
                then.call(x, function rs(v) {
                    if (thenCalledOrThrow) return
                    thenCalledOrThrow = true
                    resolvePromise(promise2, v, resolve, reject)
                }, function rj(r) {
                    if (thenCalledOrThrow) return
                    thenCalledOrThrow = true
                    return reject(r)
                })
            } else {
                // 2.3.3.4 If then is not a function, fulfill promise with x.
                return resolve(x)
            }
        } catch (error) {
            if (thenCalledOrThrow) return
            thenCalledOrThrow = true
            return reject(error)
        }

    } else {
        // 标准 2.3.4 if x is not an object or function, fulfill promise with x.  非函数或者对象
        return resolve(x)
    }
}



MyPromise.deferred = MyPromise.defer = function () {
    var dfd = {}
    dfd.promise = new MyPromise(function (resolve, reject) {
        dfd.resolve = resolve
        dfd.reject = reject
    })
    return dfd
}