

function createIndexOfFinder(dir) {
    return function (arr, item) {
        var length = arr.length
        var index = dir > 0 ? 0 : length - 1

        for (; index >= 0 && index < length; index += dir) {
            if (arr[index] === item) return index
        }
        return -1
    }
}


var indexOf = createIndexOfFinder(1)
var indexLastOf = createIndexOfFinder(-1)

console.log(indexOf([12, 5, 8, 130, 44], 130));  // 3
console.log(indexOf([12, 5, 8, 130, 44], 10));  // -1