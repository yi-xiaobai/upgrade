

//* 栈：后进先出
const stack = []
stack.push('111')
stack.push('222')
stack.push('333')
stack.push('444')
stack.push('555')

while (stack.length) {
    const res = stack.pop()
    //* 后进先出  利用数组的push方法  pop方法实现
    console.log('==>Get res', res);
    /**
     *  ==>Get res 555
        ==>Get res 444
        ==>Get res 333
        ==>Get res 222
        ==>Get res 111
     */
}
