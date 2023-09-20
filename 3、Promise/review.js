
try {
    module.exports = ReviewPromise
} catch (e) { }

/**
 * 复习promise
 * @param {*} executor 执行器 外部传来的函数    
 */
function ReviewPromise(executor) {
    var self = this
    self.data = undefined
    self.status = "pending"

    self.onResolvedCallback = []
    self.onRejectedCallback = []


    function resolve(value) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'resolved'
                self.data = value
                for (var i = 0; i < self.onResolvedCallback.length; i++) {
                    self.onResolvedCallback[i](value)
                }
            }
        })
    }


    function reject(reason) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'rejected'
                self.data = reason
                for (var i = 0; i < self.onRejectedCallback.length; i++) {
                    self.onRejectedCallback[i](reason)
                }
            }
        })
    }

    try {
        executor(resolve, reject)
    } catch (error) {
        console.error(error);
        reject(error)
    }
}


/**
 * then方法
 * @param {*} onResolved 成功的回调函数
 * @param {*} onRejected 失败的回调函数
 * @returns promise对象
 */
ReviewPromise.prototype.then = function (onResolved, onRejected) {
    var self = this
    var promise2
    // 标准：2.2.1  非函数要进行优化处理
    onResolved = typeof onResolved === 'function' ? onResolved : function (v) { return v }
    onRejected = typeof onRejected === 'function' ? onRejected : function (r) { throw r }


    // 根据状态来处理
    if (self.status === 'resolved') {
        return promise2 = new ReviewPromise(function (resolve, reject) {
            setTimeout(() => {
                // 调用成功的回调函数 并获取返回值
                var x = onResolved(self.data)
                resolvePromise(promise2, x, resolve, reject)
            })
        })
    }


    if (self.status === 'rejected') {
        return promise2 = new ReviewPromise(function (resolve, reject) {
            setTimeout(() => {
                // 调用失败的回调函数 并获取返回值
                var x = onRejected(self.data)
                resolvePromise(promise2, x, resolve, reject)
            })
        })
    }


    if (self.status === 'pending') {
        return promise2 = new ReviewPromise(function (resolve, reject) {
            self.onResolvedCallback.push(function (value) {
                try {
                    var x = onResolved(value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })


            self.onRejectedCallback.push(function (reason) {
                try {
                    var x = onRejected(reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })
        })
    }
}


/**
 * 
 * @param {*} promise2 
 * @param {*} x 
 * @param {*} resolve 
 * @param {*} reject 
 */
function resolvePromise(promise2, x, resolve, reject) {
    var then
    var thenCalledOrThrow = false


    if (promise2 === x) {
        return reject(new TypeError("error"))
    }

    if (x instanceof ReviewPromise) {
        // 处于pending中
        if (x.status === 'pending') {
            x.then(function (v) {
                resolvePromise(promise2, v, resolve, reject)
            }, reject)
        }
        x.then(resolve, reject)

        return
    }


    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            then = x.then
            if (typeof then === 'function') {
                then.call(x, function y(v) {
                    if (thenCalledOrThrow) return
                    thenCalledOrThrow = true
                    return resolvePromise(promise2, v, resolve, reject)
                },
                    function z(r) {
                        if (thenCalledOrThrow) return
                        thenCalledOrThrow = true
                        return reject(r)
                    })
            } else {
                return resolve(x)
            }
        } catch (error) {
            if (thenCalledOrThrow) return
            thenCalledOrThrow = true
            return reject(error)
        }
    } else {
        return resolve(x)
    }
}


ReviewPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}


ReviewPromise.all = function (promises) {
    return new ReviewPromise(function (resolve, reject) {
        var promiseCount = 0;
        var len = promises.length || 0
        var pro = new Array(len)
        for (var i = 0; i < len; i++) {
            ReviewPromise.resolve(promises[i]).then(function (value) {
                // 次数 + 1
                promiseCount++
                // 保存当前值在pro中
                pro[i] = value
                if (promiseCount === len) {
                    return resolve(pro)
                }
            }, function (reason) {
                return reject(reason)
            })
        }
    })
}



resolvePromise.race = function (promises) {
    return new ReviewPromise(function (resolve, reject) {
        var len = promises.length || 0
        for (var i = 0; i < len; i++) {
            ReviewPromise.resolve(promises[i]).then(function (value) {
                return resolve(value)
            }, function (reason) {
                return reject(reason)
            })
        }
    })
}


ReviewPromise.resolve = function (value) {
    var promise = new ReviewPromise(function (resolve, reject) {
        resolvePromise(promise, value, resolve, reject)
    })
    return promise
}


ReviewPromise.reject = function (reason) {
    return new ReviewPromise(function (resolve, reject) {
        reject(reason)
    })
}




ReviewPromise.deferred = ReviewPromise.defer = function () {
    var dfd = {}
    dfd.promise = new ReviewPromise(function (resolve, reject) {
        dfd.resolve = resolve
        dfd.reject = reject
    })
    return dfd
}
