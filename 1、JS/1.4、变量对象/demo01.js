


/**
 *? 什么是变量对象?
 *? 和执行上下文相关联的数据作用域  存储了上下文中定义的变量和函数声明
 */


// 全局上下文
console.log('==>Get this', this);   // {}

console.log(this instanceof Object);    // true   证明了Object 在this的原型链上

console.log(Math.random()); // 0.9739895343192473


//* 其实 全局上下文中的变量对象就是 全局对象




/**
 * 函数上下文
 *  1. 进入执行上下文
 *      变量对象会包括：
 *          a.函数的所有形参
 *          b.函数声明
 *          c.变量声明
 *  2. 执行函数
 */
