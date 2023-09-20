//* 最小栈实现

//* 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。


const MinStack = function () {
    this.stack = []

    this.stack2 = []
}



MinStack.prototype.push = function (x) {
    this.stack.push(x)

    if (!this.stack2.length || this.stack2[this.stack2.length - 1] > x) {
        this.stack2.push(x)
    }
}


MinStack.prototype.pop = function () {
    if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
        this.stack2.pop()
    }
}


MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
}


MinStack.prototype.getMin = function () {
    return this.stack2[this.stack2.length - 1]
}



let minStack = new MinStack()
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top());    // 0
console.log(minStack.getMin()); // -2