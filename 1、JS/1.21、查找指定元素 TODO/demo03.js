


//* 利用传参的不同 实现findIndex 、findLastIndex
//* 1 代表时 findIndex函数  -1代表findLastIndex函数


function createIndexFinder(dir) {
    // 返回一个函数
    // findIndex 、 findLastIndex  就是一个函数
    return function (arr, fn, ctx) {
        // 大于0  index 从 0开始
        // 小于0  index 从 末尾开始 即length - 1
        var index = dir > 0 ? 0 : arr.length - 1

        // index += dir
        // 如果 dir = 1  index 初始值 = 0 += 慢慢 + 1去遍历
        // 如果 dir = -1  index 初始值 = length - 1 -= -1去遍历
        for (; index >= 0 && index < arr.length; index += dir) {
            if (fn.call(ctx, arr[index], index, arr)) return index
        }

        return -1
    }
}

// findIndex函数
var myFind = createIndexFinder(1)

// findLastIndex函数
var myFindLast = createIndexFinder(-1)