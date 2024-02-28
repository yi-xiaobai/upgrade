// 手写apply
Function.prototype.Apply = function (context) {
  // 获取context的值
  context = context || window;

  // 将函数的赋值给fn属性
  context.fn = this;

  // 获取参数 因为是apply 故函数形式是以数组的传过来的
  const args = [...arguments][1];
  if (!Array.isArray(args)) {
    throw new Error("arguments error please use Array");
  }

  let res;
  // 如果是空数组 不需要传值
  if (args.length === 0) {
    res = context.fn();
  } else {
    // 执行函数
    res = context.fn(...args);
  }
  // 删除fn属性
  delete context.fn;
  return res;
};
