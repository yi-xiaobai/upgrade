

//* 偏函数：将一个多参数的函数 转化成 n - x 元函数
//* n代表函数的总参数个数   x 代表第一次传入的参数


function partial(fn) {
    // 获取调用partial函数的参数列表
    var args = [].slice.call(arguments, 1)
    return function () {
        var newArgs = args.concat([].slice.call(arguments, 0))
        return fn.apply(null, newArgs)
    }
}

function add(a, b, c) {
    return a + b + c
}


// n = 3  x = 1
// 剩下的参数个数  n - x = 2
var addP = partial(add, 1)
console.log(addP(5, 9));    // 15


var addP1 = partial(add, 1, 2)
console.log(addP1(5));    // 8