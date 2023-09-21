// 队列用栈的方式实现

// 所有取值全部从stack2中取  如果stack2中没有数据 需要从stack1中导入数据 再次取值

const MyQueue = function () {
  this.stack1 = [];

  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  // 如果stack2中没有值
  if (!this.stack2.length) {
    // 如果stack1中有数据
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

MyQueue.prototype.IsEmpty = function () {
  return !this.stack1.length && !this.stack2.length;
};
