// Pointfree 的本质就是使用一些通用的函数，组合出各种复杂运算。
// 上层运算不要直接操作数据，而是通过底层函数去处理。
// 这就要求，将一些常用的操作封装成函数


var prop = (p, obj) => obj[p]

var propRole = curry(prop)('role')
var isWorker = s => s === 'worker';


var callback = curry(function (item, index, arr) {

})

var filter = curry(function (fn, arr) {
    return arr.filter(fn)
});


var getIncompleteTaskSummaries = function (data) {
    var promise = Promise.resolve(data)
    promise
        .then(filter(propRole))
        .then(isWorker)
        .then((value) => {
            console.log(value);
        })
}

getIncompleteTaskSummaries(data)
var data = [
    { name: '张三', role: 'worker' },
    { name: '李四', role: 'worker' },
    { name: '王五', role: 'manager' },
];





/**
 * 函数柯里化
 * @param {*} fn 函数
 * @param {*} args 参数
 */
function curry(fn, args) {
    // 获取参数个数
    var len = fn.length
    args = args || []
    return function () {
        // 拷贝一份args出来
        var copy = args.slice(0)
        // 获取传入进来的参数
        copy = copy.concat([].slice.call(arguments, 0))
        // 参数个数不对
        if (copy.length < len) {
            return curry.call(this, fn, copy)
        } else {
            // 参数正确 执行最终函数
            return fn.apply(this, copy)
        }
    }
}