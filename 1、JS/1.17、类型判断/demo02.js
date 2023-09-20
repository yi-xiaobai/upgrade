



function isEmptyObject(obj) {
    var name
    for (name in obj) {
        return false
    }

    return true
}

console.log(isEmptyObject({}));
console.log(isEmptyObject({ name: "11" }));



// 是否是window 对象
function isWindow(obj) {
    return obj !== null && obj === obj.window
}


function isArrayList(obj) {
    // 必须要有length 属性
    var length = !!obj && "length" in obj && obj.length

    // 获取类型
    var typeRes = Object.prototype.toString.call(obj)

    // 函数 window对象去除
    if (typeRes === '[object Function]' || isWindow(obj)) {
        return false
    }

    return typeRes === '[object Array]' || length === 0 ||
        (typeof length === 'number' && length > 0 && (length - 1) in obj)

    /**
     ** length === 0 可能是这样的情况
     ** function a(){ console.log(arguments)}  a() 
     ** 此时 arguments 是一个 { length : 0 }
     ** 如果去掉了 length === 0 那么此处会返回false
     ** 但是 arguments 是一个类数组对象  顾还是要加上  判断
     */
}