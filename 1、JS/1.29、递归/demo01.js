


//* 递归  自己调用自己的函数
//* 要有边界条件
//* 要有递归条件满足逻辑处理
//* 要有递归条件不满足返回处理


/**
 * 计算阶乘的函数
 * @param {*} n 
 * @returns 
 */
function fibonacci(n) {
    if (n === 1) return 1
    return n * fibonacci(n - 1)
}

console.log(fibonacci(4));  // 24



//* 优化  
//* 尾调用：是指函数内部的最后一个动作是函数调用。该调用的返回值，直接返回给函数。
//* 原理：执行上下文处理不同
//* return 出去的是函数调用 其他什么都不能有

// 尾调用
function f(x) {
    return g(x);
}

// 非尾调用 
//* 因为 g(x) 的返回值还需要跟 1 进行计算后  f(x)才会返回返回值
function f(x) {
    return g(x) + 1;
}


// 尾调用函数
function factorial1(n, res) {
    if (n === 1) return res
    return factorial1(n - 1, n * res)
}
console.log(factorial1(4, 1));