
// await捕获异常
function fetch(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject()
        }, 0)
    })
}



async function main() {
    const res = await fetch()
    console.log('==>Get res', res);     //* 永远不会执行
}


main()


