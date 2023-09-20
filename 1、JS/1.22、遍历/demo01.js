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



/**
 * 遍历函数
 * @param {*} obj 对象
 * @param {*} callback 回调函数
 */
function each(obj, callback) {
    var length, i = 0;

    /**
     * 如果是数组/类数组用for循环
     * 对象的话 用for in
     */

    console.log('==>Get isArrayList(obj)', isArrayList(obj));
    if (isArrayList(obj)) {
        length = obj.length
        for (; i < length; i++) {
            //* 中止循环
            //* 不指定this   this指向window
            // if (callback(i, obj[i]) === false) {
            //     break
            // }


            //* 解决this问题 给obj[i]对象加上callback方法
            if (callback.call(obj[i], i, obj[i]) === false) {
                break
            }
        }
    } else {
        // 对象
        for (k in obj) {
            // 中止循环
            // if (callback(k, obj[k]) === false) {
            //     break
            // }

            if (callback.call(obj[k], k, obj[k]) === false) {
                break
            }
        }
    }
}


function test(i, n) {
    if (n === 9) {
        return false
    }
    console.log("Item #" + i + ": " + n);
}

console.log(each([1, 5, 9, 23, 10], test));
console.log(each({ name: '111', age: 18 }, test));

console.log('===>>>>>>>>>>>>this指向问题');
var person = [
    { name: 'kevin' },
    { name: 'daisy' }
]

function testP(i, n) {
    this.age = 18 + i
}

each(person, testP)
console.log(person);



