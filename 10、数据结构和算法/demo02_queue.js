

//* 队列：先进先出
//* 利用数组的push方法  shift方法实现
const queue = []

queue.push('111')
queue.push('222')
queue.push('333')
queue.push('444')
queue.push('555')

while(queue.length){
    const res = queue.shift()
    console.log('==>Get res', res);
    /**
      * ==>Get res 111
        ==>Get res 222
        ==>Get res 333
        ==>Get res 444
        ==>Get res 555
     */
}
