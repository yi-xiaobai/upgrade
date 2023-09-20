function Student() {

}
// 原型对象设置属性
Student.prototype.name = "yyds"


// 实例化
let s = new Student()
s.name = "实例化"
console.log('==>Get name', s.name)  //  实例化
delete s.name;
console.log('==>Get name', s.name)  // yyds

// 删除了原型对象上的属性
delete Student.prototype.name;
console.log('==>Get name', s.name)  // undefined


Object.prototype.name = "object 名字"
console.log('==>Get name', s.name)  // object 名字
console.log('==>Get Student.prototype的原型是：', Student.prototype.__proto__); // [Object: null prototype] {}


console.log('==>Get 原型链的顶部:', Object.prototype.__proto__);    // null


/**
 * 综上所述
 * 查找属性 如果当前对象没有 会去原型对象找
 * 如果原型对象也没有 会去原型对象的原型去找
 * 终点是 Object.prototype.__proto__ 
 * 如果此时还没找到对象的属性  undefined
 */
