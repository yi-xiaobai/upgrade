


function fetch(callback) {
    setTimeout(() => {
        throw new Error('请求失败')
    })
}


try {
    fetch(() => {
        console.log('处理请求');
    })
} catch (error) {
    console.error('失败：', error);
}

//* 放到浏览器中执行
// 程序崩溃
// Uncaught Error: 请求失败