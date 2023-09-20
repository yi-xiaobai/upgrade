

//* 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function curry(fn, args) {
    var length = fn.length;

    args = args || [];
    console.log('==>Get args', args);

    return function () {

        var _args = args.slice(0),

            arg, i;

        for (i = 0; i < arguments.length; i++) {

            arg = arguments[i];

            _args.push(arg);

        }

        if (_args.length < length) {
            // return curry.call(this, fn, _args);
            return curry(fn, _args);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}


var fn = curry(function (a, b, c) {
    console.log([a, b, c]);
});

// fn("a", "b", "c")
fn("a", "b")("c")
fn("a")("b")("c")