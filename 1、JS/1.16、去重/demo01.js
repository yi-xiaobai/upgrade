

// 双层循环
var array = [1, 1, '1', '1']

function unique(array) {
    var res = []

    for (var i = 0, len = array.length; i < len; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            // 如果array中有和  结果数组中的值相同  直接跳出循环
            if (array[i] === res[j]) {
                break
            }
        }

        // 如果array 没有和 res中有相同的数据  则 j 一定和 resLen相同
        if (j === resLen) {
            res.push(array[i])
        }
    }

    return res
}


console.log(unique(array));