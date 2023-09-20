
//* reduce
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.reduce(function (prev, item) {
        return prev.concat(Array.isArray(item) ? flatten(item) : item)
    }, [])
}

console.log(flatten(arr));