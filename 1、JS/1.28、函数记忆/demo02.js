
/**
 * 函数记忆
 * @param {*} func 回调函数
 * @param {*} hasher key值计算方式
 */
var memoize = function (func, hasher) {

    var memoize = function (key) {

        // 获取缓存
        var cache = memoize.cache

        // 如果hasher函数存在  那么将调用memoize函数的参数传入进去 形成key值
        var address = "" + (hasher ? hasher.apply(this, arguments) : key)

        // 缓存结果不存在  调用func函数设置缓存结果
        if (!cache[address]) {
            console.log('didi');
            cache[address] = func.apply(this, arguments)
        }
        return cache[address]
    }

    memoize.cache = {}
    return memoize
}


function add(a, b, c) {
    return a + b + c
}

function hasher() {
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
}


var demo = memoize(add, hasher)
console.log(demo(1, 2, 3));
console.log(demo(1, 2, 4));

console.log(demo(1, 2, 3));