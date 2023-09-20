


var Single = function () {

}

Single.getInstance = (function () {
    var instance = null
    return function () {
        if (!instance) {
            instance = new Single()
        }
        return instance
    }
})()


var s1 = Single.getInstance()
var s2 = Single.getInstance()
console.log(s1 === s2); // true
//* 无论如何  不管调用多少次getInstance方法 都只会返回一个实例

