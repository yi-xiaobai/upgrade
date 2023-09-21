//* 最小栈
// 空间换时间

const minStack = function () {
  this.stack = [];
  this.stack1 = [];
};

// 栈添加方法
minStack.prototype.push = function (x) {
  this.stack.push(x);
  // 如果添加的元素比stack1  栈顶的元素还要小 则加入
  if (!this.stack1.length || this.stack1[this.stack1.length - 1] > x) {
    this.stack1.push(x);
  }
};

// 弹出元素
minStack.prototype.pop = function (x) {
  // 如果弹出的元素跟 最小栈栈顶元素相同 那么两个都得弹出
  if (this.stack.pop() === this.stack1[this.stack1.length - 1]) {
    this.stack1.pop();
  }
};


// 获取最小元素
minStack.prototype.getMin = function(x){
    return this.stack1[this.stack1.length - 1]
}
