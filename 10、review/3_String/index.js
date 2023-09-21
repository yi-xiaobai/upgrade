// 判断是否是回文字符串

function isPalindrome(str) {
  // 字符串长度
  const len = str.length;

  // 遍历前半部分和后半部分进行对比
  for (let i = 0; i < len / 2; i++) {
    // 有一个不相同的 则直接返回false
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
