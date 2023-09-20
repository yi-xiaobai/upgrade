


/**
 ** 自定义new函数
 ** 实例属性可以访问到
 ** 构造函数中的属性可以访问到
 ** 构造函数原型上的属性和方法可以访问到
 * 
 ** 返回值为一个对象
 */


//? 由于new是一个关键字    无法像bind方法一个进行覆盖 
//? 顾自定义一个函数进行模拟


function Person(name) {
    this.name = name
    this.habit = 'Games';
}

Person.prototype.getName = function () {
    return this.name
}


function objectFactory() {

    // 定义一个对象
    var obj = new Object()



    console.log('==>Get arguments', arguments);
    // 获取构造函数
    // 删除并返回arguments 第一个参数
    var Constructor = [].shift.call(arguments)

    // obj可以访问到构造函数原型方法、属性
    obj.__proto__ = Constructor.prototype

    // new 构造函数时  参数也可以访问到
    Constructor.apply(obj, Array.prototype.slice.call(arguments))

    return obj
}


let p = objectFactory(Person, "三生三世")
console.log('==>Get p.name', p.name);
console.log('==>Get p.habit', p.habit);
console.log(p.getName());   // 11