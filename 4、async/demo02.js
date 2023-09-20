

const getDemo = () => new Promise((resolve) => setTimeout(() => resolve(999)), 1000)



const getDemo1 = () => new Promise((resolve) => setTimeout(() => resolve(100)), 1000)



function* demo() {
    const data = yield getDemo()
    console.log('==>Get data', data);
    const data1 = yield getDemo1()
    console.log('==>Get data1', data1);

    return data + data1 + "滴滴"
}



/**
 * 底层async转成generator函数
 * @param {*} fn 
 */
function asyncToGenerator(fn) {
    return function () {
        // 执行generator函数
        var ctx = fn.apply(this, arguments)
        // 返回Promise对象
        return new Promise((resolve, reject) => {
            function step(key, args) {
                // 执行next方法 获取数据
                var res
                try {
                    res = ctx[key](args)
                } catch (error) {
                    return reject(error)
                }

                console.log('==>Get res', res);
                const { value, done } = res || {}
                // 最后一步了
                if (done) {
                    return resolve(value)
                } else {
                    return Promise.resolve(value).then((res) => {
                        // 必须带上当前的值
                        // 下一次next时 会把值赋给对应的变量
                        step('next', res)
                    }, (reason) => {
                        step('throw', reason)
                    })
                }
            }
            step("next")
        })
    }
}


var test = asyncToGenerator(demo)
test().then((value) => console.log(value))