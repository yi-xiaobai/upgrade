//* 自定义实现new关键字
function newReview() {
  // 获取构造函数
  const Constructor = [].shift.call(arguments);

  // 创建对象
  let obj = new Object();

  // 指向
  obj.__proto__ = Constructor.prototype;

  // 执行构造函数
  const res = Constructor.apply(obj, Array.prototype.slice.call(arguments, 0));

  return typeof res === "object" ? res : obj;
}
