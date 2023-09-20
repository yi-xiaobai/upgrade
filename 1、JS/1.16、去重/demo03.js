var array3 = [1, 1, 'a', 'A', 2, 2];


// 迭代器去重
function unique(array, isSorted, iteratee) {
    var res = [], seen;

    for (var i = 0, len = array.length; i < len; i++) {
        var computed = iteratee ? iteratee(array[i]) : array[i]
        if (isSorted) {
            if (!i || seen !== computed) {
                res.push(computed)
            }
            seen = computed
        } else {
            if (res.indexOf(computed)) {
                res.push(computed)
            }
        }
    }

    return res
}


function iteratee(item) {
    return typeof item === 'string' ? item.toLowerCase() : item
}