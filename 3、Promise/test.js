const queue = [];

new Promise((resolve, reject) => {
  queue.push(resolve);
}).then((res) => {
  console.log("11", res);
});
console.log("22");

queue[0]("哈哈哈哈哈哈");
