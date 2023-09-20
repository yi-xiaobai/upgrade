
// 如果你持续触发事件，每隔一段时间，只执行一次事件。
// 根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。



var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;
container.onmousemove = throttle2(getUserAction, 1000);


// 时间戳实现 节流函数
function throttle(fn, wait) {
    var ctx, args;
    var previous = 0

    return function () {
        ctx = this  // 注意this的指向
        args = arguments

        var now = +new Date()
        if (now - previous > wait) {
            fn.apply(ctx, args)
            // 执行函数
            previous = now
        }
    }
}



// 定时器实现 节流函数
function throttle1(fn, wait) {
    var ctx, args, timeout;
    return function () {
        ctx = this  // 注意this的指向
        args = arguments

        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = null
                fn.apply(ctx, args)
            }, wait)
        }
    }
}



//* 由于第一种方法实现进入了就开始执行  退出了不执行
//* 第二种是实现了 进入不执行了 退出了还会继续执行
//* 第三种综合


function throttle2(fn, wait) {
    var ctx, args, timeout, previous = 0;


    var latter = function () {
        previous = +new Date()
        timeout = null
        fn.apply(ctx, args)

    }


    var throttle = function () {
        ctx = this
        args = arguments

        var now = +new Date()

        //下次触发 func 剩余的时间
        var remainTime = wait - (now - previous)
        console.log('==>Get remainTime', remainTime);
        if (remainTime <= 0 || remainTime > wait) {
            // 执行函数就执行
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            fn.apply(ctx, args)
        } else if (!timeout) {
            timeout = setTimeout(latter, remainTime)
        }

    }

    return throttle
}
