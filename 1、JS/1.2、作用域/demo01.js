


// 静态作用域、动态作用域
//? Js是 静态作用域  函数的作用域在定义的时候就已经确定了

var value = 1

function foo() {
    console.log('==>Get foo', value);   // 1
}

function bar(){
    var value = 2;
    foo()
}

bar()


/**
 * 调用bar函数 再调用foo函数
 * 先从函数内部查找有没有value值
 * 如果没有
 * 查找上一层的代码 也就是value = 1 
 * 顾打印接口==>Get value 1
 */