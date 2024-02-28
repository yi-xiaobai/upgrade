// 手写call

Function.prototype.Call = function (ctx) {
  ctx = ctx || window;

  ctx.fn = this;

  // 获取参数
  const args = [...arguments].slice(1);

  // 执行函数
  const result = ctx.fn(...args);

  delete ctx.fn;

  return result;
};
