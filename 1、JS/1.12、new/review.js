


function objectFactory() {
    // 定义一个对象
    var obj = new Object()

    // 获取构造函数
    // shift删除数组第一个元素 并返回
    var Constructor = Array.prototype.shift.call(arguments)

    // obj对象可以访问到构造函数原型链上的属性、方法
    obj.__proto__ = Constructor.prototype

    // 执行构造函数的方法、属性
    var ret = Constructor.apply(obj, Array.prototype.slice.call(arguments, 0))
    console.log('==>Get ret', ret);

    return typeof ret === 'object' ? ret : obj
}


function Student(name, age) {
    this.name = name
    this.age = age

    // return {
    //     sex: 'nan'
    // }
}

Student.prototype.say = function () {
    console.log('i am ' + this.name + '，今年' + this.age + '岁了');
}


var s = objectFactory(Student, "罗罗", 18)
console.log('==>Get s.name', s.name);
console.log('==>Get s.age', s.age);
// console.log('==>Get s.sex', s.sex);
// s.say()