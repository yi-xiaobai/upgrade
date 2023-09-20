var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    //* 没有使用防抖函数时  打印的是container节点
    //* 使用了防抖函数  打印的是 Window
    console.log('==>Get ', this);
    console.log('==>Get e', e);
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;
container.onmousemove = debounce(getUserAction, 1000, true);



// 防抖
// 规定时间内 只执行一次代码
// 限制时间的频繁触发

/**
 * 防抖函数
 * @param {Function} fn 执行函数
 * @param {Number} wait 等待时间
 * @param {Boolean} immediate 是否立刻执行
 */
function debounce(fn, wait, immediate) {
    var timeout;
    return function () {
        // 解决this指向问题
        var self = this
        // 获取参数
        var args = arguments

        // 定时器存在 清除定时器
        if (timeout) {
            // 清除定时器
            clearTimeout(timeout)
        }

        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            //* setTimeout 会返回一个数字给timeout
            timeout = setTimeout(function () {
                timeout = null
            }, wait)

            //* 如果 后续timeout 不变成null  那么函数将永远无法执行
            if (callNow) fn.call(self, args)

        } else {
            timeout = setTimeout(function () {
                fn.apply(self, args)
            }, wait)
        }

    }

}