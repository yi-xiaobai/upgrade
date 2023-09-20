

//* 在promise 使用throw配合setTimeOut抛出错误
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        throw new Error('promise配合setTimeout错误')
    }, 0);
})


promise.then((value) => {
    console.log('==>Get value', value);     //* 浏览器端 永远不执行
}).catch((reason) => {
    console.log('==>Get reason', reason);   //* 浏览器端 永远不执行
})



//* 在浏览器中使用
//* Uncaught Error: promise配合setTimeout错误