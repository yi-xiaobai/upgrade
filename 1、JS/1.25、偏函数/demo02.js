


var _ = {}
// 占位符

function partial(fn) {
    // 获取调用partial函数的参数列表
    var args = [].slice.call(arguments, 1)
    return function () {
        var position = 0, len = args.length
        for (var i = 0; i < len; i++) {
            args[i] = args[i] === _ ? arguments[position++] : args[i]
        }

        while (position < arguments.length) args.push(arguments[position++])
        return fn.apply(this, args)
    }
}


function sub(a, b) {
    return a - b
}


var subP = partial(sub, _, 10)
console.log(subP(30));