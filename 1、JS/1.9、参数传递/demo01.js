



/**
 * 参数传递
 */


function fun1(a) {
    a = true
    console.log('==>Get a', a); //true
}

function fun2(b) {
    b = 1
    console.log('==>Get b', b); // 1
}


function fun3(c) {
    c = ""
    console.log('==>Get c', c); // ""
}

a1 = false, b1 = 10, c1 = "hahaha"
fun1(a1)    // false
fun2(b1)    // 10   
fun3(c1)    // hahaha

console.log('==>Get a1', a1);
console.log('==>Get b1', b1);
console.log('==>Get c1', c1);

/**
 *? 基本类型的值传值函数内外没有发生改变 
 */



console.log('======引用类型=======');

let obj = new Object()
obj.name = "111"
function fun4(o) {
    o.name = "222"
    console.log('==>Get o', o); // { name: '222' }
}
fun4(obj)
console.log('==>Get obj', obj); // { name: '222' }


function fun5(o) {
    o = 1314
    console.log('==>Get o', o); // 1314
}

fun5(obj)
console.log('==>Get obj', obj); // { name: '222' }


//* 参数如果是基本类型是按值传递，如果是引用类型按共享传递。
