


function Promise(fn) {

    this.cbs = []

    const resolved = (value) => {
        setTimeout(() => {
            this.data = value
            this.cbs.forEach(cb => cb())
        });
    }

    fn(resolved)
}



Promise.prototype.then = function (onResolved) {
    return new Promise((resolve) => {
        this.cbs.push(() => {
            var x = onResolved(this.data)
            if (x instanceof Promise) {
                x.then(resolve)
            } else {
                resolve(x)
            }
        })
    })
}



new Promise((resolve) => {
    setTimeout(() => {
        console.log('resolve1');
        // resolve1
        resolve(1);
    }, 500);
})
    // then1
    .then((res) => {
        console.log('111', res);
        // user promise
        return new Promise((resolve) => {
            setTimeout(() => {
                // resolve2
                resolve(2);
            }, 500);
        });
    })
    // then2
    .then((res) => {
        console.log('222', res)
        return res
    });