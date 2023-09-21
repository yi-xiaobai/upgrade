// 括号匹配问题
let leftToRight = {
  "{": "}",
  "[": "]",
  "(": ")",
};

const isValid = function (str) {
  // 字符串不存在 或者 长度 = 1 直接return false  因为肯定不匹配
  if (!str || str.length === 1) {
    return false;
  }
  // 字符串长度
  const len = str.length;

  let res = [];
  for (let i = 0; i < len; i++) {
    // 左边的括号  保存其右边部分到数组中
    if (["{", "[", "("].includes(str[i])) {
      res.push(leftToRight[str[i]]);
    } else {
      // 判断右边括号部分和数组中的是否匹配
      if (!res.length || str[i] !== res.pop()) {
        return false;
      }
    }
  }

  // 如果都匹配成功  res应该是空的 pop都弹出了
  return !res.length;
};
