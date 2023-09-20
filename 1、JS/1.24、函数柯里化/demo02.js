

//* 将函数的多个参数 可以拆成一个个的参数进行传递


/**
 * 函数柯里化
 * @param {*} fn 回调函数
 * @param {*} args 参数
 */
function curry(fn, args) {
    // 获取形参数量  比如3个
    // 柯里化到3个参数都有才算逻辑的完成
    var length = fn.length

    args = args || []
    console.log('==>Get args', args);

    return function () {
        console.log('==>Get args11111', args);
        console.log('==>Get args222', args.slice(0));
        // 将后续传进来的参数拿到
        //* 此处必须  浅拷贝一下 不然下一次函数进来 直接拿到的就是上一次函数的值
        var copy = args.slice(0)
        var i = 0

        for (; i < arguments.length; i++) {
            copy.push(arguments[i])
        }

        // 判断copy 和length长度

        // 参数个数不够 需要继续执行
        if (copy.length < length) {
            return curry.call(this, fn, copy)
        } else {
            // 参数够了  执行fn函数
            return fn.apply(this, copy)
        }
    }
}

function test(a, b, c) {
    console.log([a, b, c]);
}


var fn = curry(test)
// fn(1, 2, 3)
fn(1, 2)(3)
fn(1)(3)(2)