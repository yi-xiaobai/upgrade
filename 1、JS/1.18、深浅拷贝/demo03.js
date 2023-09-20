var obj1 = {
    value: {
        3: 1
    }
}

var obj2 = {
    value: [5, 6, 7],

}

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
                    console.log('==>Get copyIsArray', copyIsArray);
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
// console.log('=->结果', extend3(true, obj1, obj2)); // { value: [ 5, 6, 7 ] }

// var a = extend3(true, [4, 5, 6, 7, 8, 9], [1, 2, 3]);
// console.log(a) //? [ 1, 2, 3, 7, 8, 9 ]

var c = extend3(true, obj2, obj1) // ???
console.log(c)  // { value: { '3': 1 } }