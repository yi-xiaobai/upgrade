

// 中间件函数组合
function composeMiddlewares(middlewares) {
    // middlewarws必须是数组
    // 里面内容必须是函数
    return function wrapMiddlewares(ctx) {
        // 记录下标
        var index = -1

        function dispatch(i) {
            index = i

            // 获取对应的数组中间件函数
            var fn = middlewares[i]
            if (!fn) {
                return Promise.resolve()
            }

            // 执行中间件函数
            // 两个参数
            // 第一个 ctx  第二个 next函数  方便进入下一个中间件
            return Promise.resolve(fn(ctx, () => { dispatch(i + 1) }))
        }

        // 执行第一个中间件
        return dispatch(0)
    }
}

class Koa {

    constructor() {
        this.middlewares = []
    }

    /**
     * 添加中间件
     * @param {*} fn 函数
     */
    use(fn) {
        this.middlewares.push(fn)
    }


    start({ req }) {
        // 组合中间件
        const composed = composeMiddlewares(this.middlewares)
        // 初始化ctx
        const ctx = { req, res: undefined }
        composed(ctx)
    }
}


const app = new Koa()
app.use(async (ctx, next) => {
    try {
        console.log('中间件开始了');
        await next()
    } catch (error) {
        console.log(`[koa error]：${error.message}`);
    }
})


app.use(async (ctx, next) => {
    const { req } = ctx
    console.log(`req is ${JSON.stringify(req)}`);
    await next()
    console.log(`res is ${JSON.stringify(ctx.res)}`);
})


// 第三层 核心服务中间件
// 在真实场景中 这一层一般用来构造真正需要返回的数据 写入ctx中
app.use(async (ctx, next) => {
    const { req } = ctx;
    console.log(`calculating the res of ${req}...`);
    const res = {
        code: 200,
        result: `req ${req} success`,
    };
    // 写入ctx
    ctx.res = res;
    await next();
    console.log('中间件回去了');
});


app.start({ req: '滴滴' })
