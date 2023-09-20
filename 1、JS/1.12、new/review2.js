


function Person(name) {
    this.name = name

    // return {
    //     name: name,
    //     age: 18,
    //     sex: '男'
    // }
}

Person.prototype.getName = function () {
    return this.name
}


function objectFactory() {
    var obj = new Object()


    // 获取构造函数
    var Constructor = [].shift.call(arguments)

    // 可以获取到构造函数原型对象上的方法和属性
    obj.__proto__ = Constructor.prototype

    // 执行构造函数 初始化参数
    var ret = Constructor.call(obj, Array.prototype.slice.call(arguments, 0))

    // 如果ret的类型是对象 那么返回ret  否则返回 obj
    return typeof ret === 'object' ? ret : obj
}