//* 定义一个构造函数
function Person() {

}

//* 在Person的原型对象上定义一个属性  每个函数都有prototype属性
Person.prototype.age = 18


let p1 = new Person()
p1.age = 20
let p2 = new Person()
console.log('==>Get p1的年龄：', p1.age);   //* ==>Get p1的年龄： 20
console.log('==>Get p2的年龄：', p2.age);   //* ==>Get p2的年龄： 18

/**
 *! 我的p1对象上没有定义age属性 为什么还可以访问到age
 */

//* 打印p1对象
console.log('==>Get p1', p1);   //* Person { age: 20 }

//* 打印p1的 __proto__属性
//* 每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。
console.log('==>Get p1.__proto__', p1.__proto__);   //* { age: 18 }

//* 构造函数的Prototype属性
console.log('==>Get Person.prototype', Person.prototype);   //* { age: 18 }


/**
 * Person.prototype 和 p1.__proto__ 打印的值相同
 * Person.prototype === p1.__proto__   ???
 */

console.log('==>Get 是否相同', Person.prototype === p1.__proto__);  //* true


const arr = new Array()
console.log('==>Get 数组的原型对象', Array.prototype);
console.log('==>Get 数组', arr.__proto__ === Array.prototype);  //* true