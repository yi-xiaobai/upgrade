// function test(ele) {
//     return ele > 15
// }

// console.log([12, 5, 8, 130, 44].findIndex(test));   // 3





/**
 * 自己实现的findIndex
 * @param {*} arr 数组
 * @param {*} fn  函数
 * @param {*} ctx this
 */
function myFindIndex(arr, fn, ctx) {
    console.log('==>Get ctx', ctx);
    // 对于空数组 不执行接下里的步骤
    if (!arr || arr.length <= 0) {
        return
    }

    for (var i = 0; i < arr.length; i++) {
        if (fn.call(ctx, arr[i], i, arr)) return i
    }

    // 未找到符合结果 返回 -1
    return -1
}



var list = [12, 5, 8, 130, 44]

function func(item, index, arr) {
    return item === 5
}


function func1(item, index, arr) {
    return item === 1
}

console.log(myFindIndex(list, func));   // 找到返回对应的index  1
console.log(myFindIndex(list, func1));   // 未找到返回 -1