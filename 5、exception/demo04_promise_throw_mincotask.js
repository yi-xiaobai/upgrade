

Promise.resolve(true).then((res) => {
    throw new Error('微任务抛出异常')
}).catch((reason) => {
    console.log('==>Get reason', reason);
})


//* 浏览器端：==>Get reason Error: 微任务抛出异常  可以正常执行