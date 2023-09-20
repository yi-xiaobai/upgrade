function Person() {

}

let p = new Person()
p.name = "原型"
console.log('==>Get p.name', p.name); // 原型
console.log('==>Get 实例对象的原型', p.__proto__);  // {}
console.log('==>Get 构造函数的原型对象', Person.prototype); // {}