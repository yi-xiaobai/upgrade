// 生成迭代器
function iteratorGenerator(list) {
  // 索引
  let idx = 0;
  // 长度
  let length = list.length;

  return {
    next: function () {
      // 如果idx没有超过集合长度 为false
      const done = idx >= length;
      // done为false 可以继续取值
      const value = !done ? list[idx++] : undefined;

      // 将当前值以及是否遍历完毕 返回出去
      return {
        done,
        value,
      };
    },
  };
}
