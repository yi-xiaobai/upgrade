
//* 递归



var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    var result = []
    var len = arr.length
    for (var i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }

    return result
}

console.log(flatten(arr));