
// 类型检测

var date = new Date()
var reg = new RegExp()

console.log('==>Get date类型', typeof date);    // object
console.log('==>Get reg类型', typeof reg);      // object

// 第二版
var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})


function type(obj) {
    if (obj === null) {
        return obj + ""
    }
    return (typeof obj === 'object' || typeof obj === 'function') ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj
}

console.log(type(date));    // date
console.log(type(reg));     // regexp
console.log(type([]));     // array
console.log(type(null));     // null