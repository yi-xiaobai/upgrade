//* 迭代器模式

const iterator = function (arr) {
  // 获取数组长度
  const length = arr.length;

  // 设置初始索引
  let idx = 0;

  // 返回一个next函数
  return {
    next: function () {
      const done = idx >= length;

      // done：false代表可继续遍历 否则不行
      const val = !done ? arr[idx++] : undefined;
      return {
        val,
        done,
      };
    },
  };
};
