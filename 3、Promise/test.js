promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11)
    }, 100)
})


promise2 = promise1.then(function (value) {
    // return Promise.resolve(1314)
    // return new Promise((resolve, reject) => {
    //     resolve(1314)
    // })
    console.log('====');
}, function (reason) {
    console.log(22);
    throw new Error('sth went wrong')
})

