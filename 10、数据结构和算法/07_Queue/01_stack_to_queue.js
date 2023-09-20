



//* 用栈实现一个队列


const MyQueue = function () {
    this.stack = []
    this.stack2 = []
}


MyQueue.prototype.push = function (x) {
    this.stack.push(x)
}


MyQueue.prototype.pop = function () {
    if (!this.stack2.length) {
        while (this.stack.length > 0) {
            this.stack2.push(this.stack.pop())
        }
    }
    return this.stack2.pop()
}


MyQueue.prototype.peek = function () {
    if (!this.stack2.length) {
        while (this.stack.length > 0) {
            this.stack2.push(this.stack.pop())
        }
    }
    const len = this.stack2.length
    return len && this.stack2[len - 1]
}


MyQueue.prototype.empty = function () {
    // 两个栈数据都为空  empty返回true 否则 false
    return !this.stack.length && !this.stack2.length
}