//* 观察者模式

// 发布者
class Publish {
  constructor() {
    this.observers = [];
  }

  // 新增订阅者
  add(observer) {
    this.observers.push(observer);
  }

  // 移除订阅者
  remove(observer) {
    if (this.observers.length) {
      this.observers.forEach((item, i) => {
        if (item === observer) {
          this.observers.splice(i, 1);
        }
      });
    }
  }

  // 通知订阅者
  notify() {
    this.observers.forEach((item) => {
      // 调用订阅者的update方法
      item.update();
    });
  }
}

// 订阅者
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(this.name + "文档更新了 我可以开始干活了");
  }
}

const p = new Publish();
const A = new Observer("A");
const B = new Observer("B");
const C = new Observer("C");
p.add(A);
p.add(B);
p.add(C);

p.notify();
