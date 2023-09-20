
// 第一版深浅拷贝
/**
 ** 只能实现浅拷贝
 */
function extend1() {
    // 获取参数长度
    var len = arguments.length

    // 获取目标对象
    var target = arguments[0]

    var i = 1;
    for (; i < len; i++) {
        var item = arguments[i]
        // item必须要存在 防止  (obj,,obj) 这种情况
        if (item) {
            for (k in item) {
                var copy = item[k]
                if (copy !== undefined) {
                    target[k] = copy
                }
            }
        }

    }
}

var obj1 = {
    a: 1,
    b: { b1: 1, b2: 2 }
};

var obj2 = {
    b: { b1: 3, b3: 4 },
    c: 3
};

var obj3 = {
    d: 4
}

extend1(obj1, obj2, obj3)
console.log(obj1);


// 第二版深浅拷贝

/**
 ** 根据deep参数判断是否需要进行深拷贝
 ** 递归
 */
function extend2() {
    var i = 1;

    // 形参长度
    var len = arguments.length

    var target = arguments[0] || {}

    console.log('==>Get arguments', arguments);

    // 是否需要深拷贝
    var deep;

    // 如果第一个参数为 boolean类型
    if (typeof target === 'boolean') {
        deep = target
        target = arguments[i]
        // 从对象的 第三个元素 开始遍历
        i++
    }

    // target必须为对象 不然无法copy
    if (typeof target !== 'object') {
        target = {}
    }

    for (; i < len; i++) {
        // 此时 i 要么为1  要么为2
        var options = arguments[i]
        if (options) {
            for (k in options) {
                var src = target[k]
                var copyed = options[k]
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


console.log('========>第二版结果');

var obj1 = {
    a: 1,
    b: { b1: 1, b2: 2 }
};

var obj2 = {
    b: { b1: 3, b3: 4 },
    c: 3
};

var obj3 = {
    d: 4
}
console.log(extend2(true, obj1, obj2, obj3));

