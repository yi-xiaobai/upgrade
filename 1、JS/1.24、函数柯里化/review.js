


/**
 * 函数柯里化
 * @param {*} fn 函数
 * @param {*} args 参数
 */
function curry(fn, args) {
    // 获取参数个数
    var len = fn.length
    args = args || []
    return function () {
        // 拷贝一份args出来
        var copy = args.slice(0)
        // 获取传入进来的参数
        copy = copy.concat([].slice.call(arguments, 0))
        // 参数个数不对
        if (copy.length < len) {
            return curry.call(this, fn, copy)
        } else {
            // 参数正确 执行最终函数
            return fn.apply(this, copy)
        }
    }
}


function add(a, b, c) {
    console.log([a, b, c]);
}

var res = curry(add)
res(1)(2, 3)
res(3, 3)(23)