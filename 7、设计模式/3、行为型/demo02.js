//* 发布订阅模式

// 实现一个event bus

class EventBus {
  constructor() {
    // 存储事件和回调之间的对应关系
    this.handlers = {};
  }

  // 添加
  on(eventName, cb) {
    // 检查是否有对应的回调函数队列
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }

    // 添加回调函数进队列
    this.handlers[eventName].push(cb);
  }

  // 移除
  off(eventName, cb) {
    // 获取当前事件对用的回调函数队列
    const callbacks = this.handlers[eventName];
    const index = callbacks.indexOf(cb);
    // 不等于 -1 代表存在
    if (index !== -1) {
      // 进行删除
      this.handlers[eventName].splice(index, 1);
    }
  }

  // 触发
  emit(eventName, ...args) {
    // 获取当前事件对应的回调函数队列
    const callbacks = this.handlers[eventName];
    // 存在队列
    if (callbacks) {
      callbacks.forEach((item) => {
        // 执行回调函数并传入参数
        item(...args);
      });
    }
  }

  // 单次执行
  once(eventName, cb) {
    const wrapper = (...args) => {
      // 执行函数
      cb(...args);
      // 从事件的回调函数队列中删除
      this.off(eventName, wrapper);
    };
    // 添加监听
    this.on(eventName, wrapper);
  }
}
