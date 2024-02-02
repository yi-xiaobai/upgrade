let foo = {
  value: 1,
};

// 有返回值
function bar() {
  return this.value;
}

// 无返回值
function bar1() {
  this.value;
}

const bindFoo = bar.bind(foo);
const bindFoo1 = bar1.bind(foo);
console.log(bindFoo());
console.log(bindFoo1());
