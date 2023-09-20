/**
 ** 根据deep参数判断是否需要进行深拷贝
 ** 递归
 */


var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;

function isPlainObject(obj) {
    var proto, Ctor;
    if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
    }

    // 获取原型对象
    proto = Object.getPrototypeOf(obj);
    if (!proto) {
        return true;
    }
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
}

function isFunction(target) {
    return Object.prototype.toString.call(target) === '[object Function]'
}


function extend2() {
    var i = 1;

    // 形参长度
    var len = arguments.length

    var target = arguments[0] || {}

    // 是否需要深拷贝
    var deep;

    // 如果第一个参数为 boolean类型
    if (typeof target === 'boolean') {
        deep = target
        target = arguments[i]
        // 从对象的 第三个元素 开始遍历
        i++
    }

    // target必须为对象  或者非对象 是一个函数也可以
    if (typeof target !== 'object' && !isFunction(target)) {
        target = {}
    }

    for (; i < len; i++) {
        // 此时 i 要么为1  要么为2
        var options = arguments[i]
        if (options) {
            for (k in options) {
                var src = target[k]
                var copyed = options[k];
                console.log('==>Get src，copyed', src, copyed);
                // 深度遍历存在
                if (deep && copyed && typeof copyed === 'object') {
                    target[k] = extend2(deep, src, copyed)
                } else if (copyed !== undefined) {
                    target[k] = copyed
                }
            }
        }
    }

    return target
}


var obj1 = {
    a: 1,
    b: {
        c: 2
    }
}

var obj2 = {
    b: {
        c: [5],

    }
}

//? 这是错误的
console.log(extend2(true, obj1, obj2)); //* { a: 1, b: { c: { '0': 5 } } }


/**
 ** 因为 typeof 数组 返回 object  
 ** 所以当src = 2 copyed = [5] 会继续递归执行下去
 ** 此时target = 2 非对象也非函数  重置为{}
 ** 遍历[5]   k =0
 ** 顾 target{ '0' = 5 }
 */


/**
 ** 为了解释上述问题
 ** 判断目标属性值跟要复制的对象的属性值类型是否一致:
 **     1. 如果待复制对象属性值类型为数组，目标属性值类型不为数组的话，目标属性值就设为 []
 **     2. 如果待复制对象属性值类型为对象，目标属性值类型不为对象的话，目标属性值就设为 {}
 */



function extend3() {
    var i = 1;

    // 形参长度
    var len = arguments.length

    var target = arguments[0] || {}

    // 是否需要深拷贝
    var deep, clone, copyIsArray;

    // 如果第一个参数为 boolean类型
    if (typeof target === 'boolean') {
        deep = target
        target = arguments[i]
        // 从对象的 第三个元素 开始遍历
        i++
    }

    // target必须为对象  或者非对象 是一个函数也可以
    if (typeof target !== 'object' && !isFunction(target)) {
        target = {}
    }

    for (; i < len; i++) {
        // 此时 i 要么为1  要么为2
        var options = arguments[i]
        if (options) {
            for (k in options) {
                var src = target[k]
                var copyed = options[k];

                //* 解决循环引用问题
                if (copyed === target) {
                    // 跳出当前循环
                    continue
                }

                // 深度遍历存在
                if (deep && copyed && (isPlainObject(copyed) || (copyIsArray = Array.isArray(copyed)))) {

                    if (copyIsArray) {
                        copyIsArray = false
                        clone = src && Array.isArray(src) ? src : []
                    } else {
                        clone = src && isPlainObject(src) ? src : {}
                    }
                    console.log('==>Get clone,copyed', clone, copyed);
                    target[k] = extend3(deep, clone, copyed)
                } else if (copyed !== undefined) {
                    target[k] = copyed
                }
            }
        }
    }

    return target
}

console.log('============>增加数组判断');
console.log(extend3(true, obj1, obj2));