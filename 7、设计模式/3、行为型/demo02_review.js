//* 发布订阅模式 review

class EventBus {
  constructor() {
    this.handler = {};
  }

  // 添加监听者
  on(eventName, cb) {
    if (!this.handler[eventName]) {
      this.handler[eventName] = [];
    }
    this.handler[eventName].push(cb);
  }

  // 通过监听者
  emit(eventName, ...args) {
    const callbacks = this.handler[eventName];
    if (callbacks) {
      callbacks.forEach((item) => {
        item(...args);
      });
    }
  }

  // 移除监听者
  off(eventName, cb) {
    const callbacks = this.handler[eventName];
    const index = callbacks.indexOf(cb);
    // 证明回调队列中存在监听者
    if (index !== -1) {
      this.handler[eventName].splice(index, 1);
    }
  }

  // 单词监听
  once(eventName, cb) {
    const wrapper = (...args) => {
      // 执行函数
      cb(...args);
      // 移除函数
      this.off(eventName, wrapper);
    };

    this.on(eventName, wrapper);
  }
}
