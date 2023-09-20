


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
        if (self.status === 'pending') {
            // 改变状态为 成功
            self.status = 'resolved'
            self.data = value
            for (let i = 0; i < self.onResolvedCallBack.length; i++) {
                self.onResolvedCallBack[i](value)
            }
        }

    }

    function reject(reason) {
        if (self.status === 'pending') {
            // 改变状态为 成功
            self.status = 'rejected'
            self.data = reason
            for (let i = 0; i < self.onRejectedCallBack.length; i++) {
                self.onRejectedCallBack[i](reason)
            }
        }
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
    onResolved = typeof onResolved === 'function' ? onResolved : function (v) { return v}
    onReject = typeof onReject === 'function' ? onReject : function (r) { throw r}


    // 成功
    if (self.status === 'resolved') {
        // 返回一个promise对象
        return promise2 = new MyPromise(function (resolve, reject) {
            try {
                var x = onResolved(self.data)
                // 如果x 是 promise的实例
                if (x instanceof MyPromise) {
                    x.then(resolve, reject)
                }
                resolve(x)
            } catch (error) {
                reject(error)
            }
        })
    }


    // 失败
    if (self.status === 'rejected') {
        // 返回一个promise对象
        return promise2 = new MyPromise(function (resolve, reject) {
            try {
                var x = onReject(self.data)
                // 如果x 是 promise的实例
                if (x instanceof MyPromise) {
                    x.then(resolve, reject)
                }
                resolve(x)
            } catch (error) {
                reject(error)
            }
        })
    }


    // 进行中
    if (self.status === 'pending') {
        // 返回一个promise对象
        return promise2 = new MyPromise(function (resolve, reject) {
            self.onResolvedCallBack.push(function (value) {
                try {
                    var x = onResolved(self.data)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            })


            self.onRejectedCallBack.push(function (value) {
                try {
                    var x = onReject(self.data)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
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