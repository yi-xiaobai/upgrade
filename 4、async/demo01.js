const getData = () =>
    new Promise(resolve => setTimeout(() => resolve("data"), 1000))


const getData1 = () =>
    new Promise(resolve => setTimeout(() => resolve("aaaaa"), 1000))

// async函数会被编译成generator函数 (babel会编译成更本质的形态，这里我们直接用generator)
function* testG() {
    // await被编译成了yield
    const data = yield getData()
    console.log('data: ', data);
    const data2 = yield getData1()
    console.log('data2: ', data2);
    return data + '123'
}

function asyncToGenerator(generatorFunc) {
    return function () {

        // 调用generator函数
        const gen = generatorFunc.apply(this, arguments)
        return new Promise((resolve, reject) => {
            function step(key, arg) {
                let generatorResult
                try {
                    generatorResult = gen[key](arg)
                    console.log('==>Get generatorResult', generatorResult);
                } catch (error) {
                    return reject(error)
                }

                const { value, done } = generatorResult

                if (done) {
                    return resolve(value)
                } else {
                    return Promise.resolve(value).then(
                        function onResolve(val) {
                            step("next", val)
                        },
                        function onReject(err) {
                            step("throw", err)
                        },
                    )
                }
            }
            step("next")
        })
    }
}

const testGAsync = asyncToGenerator(testG)
testGAsync().then(result => {
    console.log('==>Get result', result)
})

// testGAsync()