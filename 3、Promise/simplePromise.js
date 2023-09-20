
// 最简单实现Promise
function Promise(fn) {
    this.cbs = [];

    const resolve = (value) => {
        setTimeout(() => {
            this.data = value;
            this.cbs.forEach((cb) => {
                cb(value)
            });
        });
    }

    fn(resolve);
}

Promise.prototype.then = function (onResolved) {
    console.log('then方法');
    return new Promise((resolve) => {
        this.cbs.push(() => {
            const res = onResolved(this.data);
            console.log('==>Get this.data', this.data);
            console.log('==>Get 返回值', res);
            if (res instanceof Promise) {
                res.then(resolve);
            } else {
                resolve(res);
            }
        });
    });
};


// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('resolve1');
//         // resolve1
//         resolve(1);
//     }, 500);
// })
//     // then1
//     .then((res) => {
//         console.log('111', res);
//         // user promise
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 // resolve2
//                 resolve(2);
//             }, 500);
//         });
//     })
//     // then2
//     .then((res) => {
//         console.log('222', res)
//         return res
//     });



var promise1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('resolve1');
        // resolve1
        resolve(1);
    }, 500);
})


var userPromise

var promise2 = promise1.then((res) => {
    console.log('111', res);
    // user promise
    userPromise = new Promise((resolve) => {
        setTimeout(() => {
            // resolve2
            resolve(2);
        }, 500);
    });
    return userPromise
})

promise2.then((res) => {
    console.log('222', res)
    return res
});
