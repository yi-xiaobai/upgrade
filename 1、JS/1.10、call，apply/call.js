


/**
 * 给当前函数换一个调用者
 */

var name = "滴滴"
var age = 20
var value = 520


let obj = {
    value: 1314
}

function bar(name, age) {
    this.name = name
    this.age = age

    return {
        name: name,
        age: age,
        value: this.value,
    }
}



Function.prototype.call2 = function (context) {
    var context = context || new Object()
    // 将函数赋值给对象的  fn 属性
    context.fn = this

    // console.log('==>Get arguments', arguments);
    // console.log('==>Get arguments', [...arguments].slice(1));
    var args = []
    for (let index = 1; index < arguments.length; index++) {
        // console.log('==>Get', arguments[index]);
        args.push('arguments[' + index + ']')
    }
    // console.log('==>Get args', args);

    var result = eval('context.fn(' + args + ')')
    console.log('==>Get result', result);
    delete context.fn
    return result

}

bar.call2(obj, "111", 19)
bar.call2(null)
