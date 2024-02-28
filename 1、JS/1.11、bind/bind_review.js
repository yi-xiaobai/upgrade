//* 自定义实现bind

Function.prototype.BindReview = function (ctx) {
  // 获取传参
  const args = Array.prototype.slice.call(arguments, 1);
  const _this = this;

  var fbound = function () {
    // 获取函数的传参
    const bindArgs = Array.prototype.slice.call(arguments, 0);

    _this.apply(this instanceof fbound ? this : ctx, args.concat(bindArgs));
  };

  fbound.prototype = this.prototype;
  return fbound;
};
