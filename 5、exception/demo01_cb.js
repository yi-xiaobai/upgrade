

function fetch(callback) {
    setTimeout(() => {
        throw new Error('失败了。。。')
    })
}


fetch(() => {
    console.log('执行callback函数');
})


