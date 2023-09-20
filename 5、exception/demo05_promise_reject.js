

//* 在promise 使用reject配合setTimeOut抛出错误


function thirdFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('使用reject配合setTimeOut抛出错误')
        }, 0);
    })
}


thirdFunction().then((value) => { }).catch((reason) => {
    console.log('==>Get reason', reason);
})


//* 浏览器端/nodeJs端：==>Get reason 使用reject配合setTimeOut抛出错误  
//* 可以正常捕获错误   如果一定要在宏任务中抛出错误 请用reject!!!