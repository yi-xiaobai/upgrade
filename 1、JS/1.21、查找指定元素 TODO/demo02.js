

//* ES6没有findLastIndex  跟findIndex相反 


function myFindLastIndex(arr, fn, ctx) {
    // 数组为空 或者 不存在 直接return
    if (!arr || arr.length <= 0) {
        return
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        if (fn.call(ctx, arr[i], i, arr)) return i
    }

    return -1
}


var list = [12, 5, 8, 130, 44]

function func(item, index, arr) {
    return item === 5
}

console.log(myFindLastIndex(list, func));  