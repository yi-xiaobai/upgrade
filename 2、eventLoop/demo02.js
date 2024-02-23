// 实现一个lazyMan

class LazyMan {
  constructor(name) {
    this.tasks = [];
    this.name = name;

    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const task = this.tasks.shift();
    task && task();
  }

  eat(fruits) {
    const task = () => {
      console.log(`${this.name}吃了${fruits}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }

  sleep(m) {
    const task = () => {
      setTimeout(() => {
        console.log(`${this.name}睡觉了`);
        this.next();
      }, m * 1000);
    };
    this.tasks.push(task);
    return this;
  }
}

const l = new LazyMan("张三");
l.eat("苹果").eat("香蕉").sleep(5).eat("葡萄");
