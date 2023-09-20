
/**
 ** 将 请求拦截器和响应拦截器加入到一个数组中
 ** 数组的核心是axios的业务逻辑
 ** 即  请求拦截器-->核心业务逻辑执行-->响应拦截器
 */


const axios = config => {
    if (config.error) {
        return Promise.reject({
            error: 'error in axios'
        })
    } else {
        return Promise.resolve({
            ...config,
            result: 'success'
        })
    }
}


// 储存拦截器数据
axios.interceptors = {
    // 请求拦截器
    request: [],
    // 响应拦截器
    response: []
}


/**
 * 添加请求拦截器函数
 * @param {*} resolved 
 * @param {*} reject 
 */
axios.useRequestInterceptor = (resolved, reject) => {
    axios.interceptors.request.push({ resolved, reject })
}



/**
 * 添加响应拦截器函数
 * @param {*} resolved 
 * @param {*} reject 
 */
axios.useResponseInterceptor = (resolved, reject) => {
    axios.interceptors.response.push({ resolved, reject })
}


axios.run = config => {
    const chain = [
        {
            resolved: axios,
            reject: null
        }
    ]

    // 将请求拦截器添加到chain 头部
    axios.interceptors.request.forEach(item => chain.unshift(item))


    // 将响应拦截器添加到chain 尾部
    axios.interceptors.response.forEach(item => chain.push(item))


    var promise = Promise.resolve(config)
    while (chain.length) {
        const { resolved, reject } = chain.shift()
        promise = promise.then(resolved, reject)
    }
    return promise
}


// 添加请求拦截器
axios.useRequestInterceptor((config) => {
    console.log('==>Get config1', config);
    return {
        ...config,
        extraParams1: "extraParams111"
    }
})

// 添加请求拦截器
axios.useRequestInterceptor((config) => {
    console.log('==>Get config222', config);
    return {
        ...config,
        extraParams2: "extraParams2"
    }
})


// 添加响应拦截器
axios.useResponseInterceptor((resp) => {
    console.log('==>Get resp', resp);
    return {
        ...resp,
    }
})


// axios.run({
//     message: 'message1',
// }).then((resp) => {
//     console.log('==>Get resp', resp);
// })


axios.run({
    error: true,
}).then((resp1) => {
    console.log('==>Get resp1', resp1);
}).catch((reason)=>{
    console.log('==>Get reason', reason);
})