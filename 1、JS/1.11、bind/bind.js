
// bind的模拟实现


/**
 * bind会返回一个函数
 * bind可以传入参数
 * 返回的函数也可以传入参数
 * @param {*} ctx 
 */

Function.prototype.bind2 = function (ctx) {
    // 判断调用者是否是一个函数
    if (typeof this !== 'function') {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
    }

    const _this = this

    // 获取bind传入的参数
    // 从第一个开始截取
    var args = Array.prototype.slice.call(arguments, 1)

    // 返回一个函数
    return function () {
        // 获取返回函数的参数 全部
        var bindArgs = Array.prototype.slice.call(arguments)

        return _this.apply(ctx, args.concat(bindArgs))
    }
}



/**
 ** 构造函数效果 模拟
 ** 如果返回的函数被new
 ** 则this指向失效  但是传入的参数依旧有效
 * @param {*} ctx 
 * @returns 
 */
Function.prototype.bind3 = function (ctx) {
    // 判断调用者是否是一个函数
    if (typeof this !== 'function') {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
    }

    const _this = this

    // 获取bind传入的参数
    // 从第一个开始截取
    var args = Array.prototype.slice.call(arguments, 1)


    var fBound = function () {
        // 获取返回函数的参数 全部
        var bindArgs = Array.prototype.slice.call(arguments)


        //* 如果函数被new了  那么fBound 处于 this的原型链上
        return _this.apply(this instanceof fBound ? this : ctx, args.concat(bindArgs))
    }

    // 原型指向
    fBound.prototype = this.prototype
    // 返回一个函数
    return fBound
}


var foo = {
    value: 1
}


function bar(name, age) {
    console.log('==>Get this.value', this.value);
    console.log('==>Get name', name);
    console.log('==>Get age', age);
}

barBind = bar.bind2(foo, "yyds")
barBind(20)
/**
 * ==>Get this.value 1
 * ==>Get name yyds
 * ==>Get age 20 
 */


console.log('=>================');
var foo1 = {
    value: 1
}


function bar1(name, age) {
    this.a = 1314
    console.log('==>Get this.value', this.value);
    console.log('==>Get name', name);
    console.log('==>Get age', age);
}

bar1.prototype.sex = "男"

Ans = bar1.bind3(foo1, "991")
var obj = new Ans(16)
console.log('==>Get obj.sex', obj.sex);
console.log('==>Get obj.a', obj.a);

/**
 *   ==>Get this.value undefined
 *   ==>Get name 991
 *   ==>Get age 16
 *   ==>Get obj.sex 男
 *   ==>Get obj.a 1314
 */





/**
 ** 如果修改了 fBound.prototype  也会直接修改绑定函数的 prototype
 ** 顾可以用一个中间函数来做替换
 * @param {*} ctx 
 * @returns 
 */
Function.prototype.bind4 = function (ctx) {
    // 判断调用者是否是一个函数
    if (typeof this !== 'function') {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
    }

    const _this = this

    // 获取bind传入的参数
    // 从第一个开始截取
    var args = Array.prototype.slice.call(arguments, 1)


    var fNop = function () { }

    var fBound = function () {
        // 获取返回函数的参数 全部
        var bindArgs = Array.prototype.slice.call(arguments)

        //* 如果函数被new了  那么fNop 处于 this的原型链上
        return _this.apply(this instanceof fNop ? this : ctx, args.concat(bindArgs))
    }

    // 原型指向
    fNop.prototype = this.prototype
    fBound.prototype = new fNop()
    // 返回一个函数
    return fBound
}