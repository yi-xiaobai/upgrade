
// await捕获异常
function fetch(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('捕获异常')
        }, 0)
    })
}



async function main() {
    try {
        const res = await fetch()
        console.log('==>Get res', res);
    } catch (error) {
        console.error('==>Get error', error);   //* ==>Get error 捕获异常
    }
}

main()


