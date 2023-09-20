
var array = [1, 1, '1', '1']

//* indexOf

/**
 * 直接去重
 * @param {*} array 
 * @returns 
 */
function uniqueIndexOf(array) {
    // 存储结果
    var res = []
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i]
        // 未找到当前元素在res中
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res
}
console.log(uniqueIndexOf(array));




/**
 * 排序后后去重
 * @param {*} array 
 */
function uniqueSort(array) {
    // 存储结果
    var res = []

    // 数组排序
    var sortedArray = array.concat().sort()

    var seen;

    for (var i = 0, len = sortedArray.length; i < len; i++) {

        //* 第一个元素 直接加到数组中
        // 后续元素不能和前一个相同
        if (!i || sortedArray[i] !== seen) {
            res.push(sortedArray[i])
        }
        seen = sortedArray[i]
    }

    return res
}

console.log(uniqueSort([1, 1, '1']));



var array1 = [1, 2, '1', 2, 1];
var array2 = [1, 1, '1', 2, 2];
/**
 * indexOf sorted两种方式合并
 * @param {*} array 
 * @param {*} isSorted 
 */
function unique(array, isSorted) {
    var res = []
    var seen

    for (var i = 0, len = array.length; i < len; i++) {
        if (isSorted) {
            if (!i || seen !== array[i]) {
                res.push(array[i])
            }
            seen = array[i]
        } else {
            if (res.indexOf(array[i]) === -1) {
                res.push(array[i])
            }
        }
    }

    return res
}
console.log(unique(array1));
console.log(unique(array2, true));


console.log('==>>>>>>>>>>>>>>>>ES6');
console.log(Array.from(new Set(array1)));
console.log([...new Set(array2)]);