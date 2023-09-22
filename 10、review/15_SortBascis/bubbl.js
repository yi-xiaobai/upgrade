/**
 * 冒泡排序
 * @param {*} arr
 */
function bubbl(arr) {
  const len = arr.length;
  // 外层控制循环次数
  for (let i = 0; i < len; i++) {
    // j只能到倒数第二个数  可以跟最后一个数进行比较 所以没有必要到len - 1的位置上去
    //* len - 1 - i 代表没循环一次  已经有一个数 有序了 没必要再次判断
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
}

/**
 * 冒泡排序优化版
 * @param {*} arr
 */
function bubblbetter(arr) {
  const len = arr.length;
  // 外层控制循环次数
  for (let i = 0; i < len; i++) {
    //* 定义一个标志位
    let flag = false;

    //* j只能到倒数第二个数  可以跟最后一个数进行比较 所以没有必要到len - 1的位置上去
    //* len - 1 - i 代表没循环一次  已经有一个数 有序了 没必要再次判断
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        flag = true[(arr[j + 1], arr[j])] = [arr[j], arr[j + 1]];
      }
    }

    // 如果flag还是false 证明数组已经有序了 不需要再次进行循环
    if (!flag) {
      return arr
    }
  }
}

const arr = [6, 2, 9, 10, 1, 8];
bubbl(arr);
console.log("==>Get arr", arr);
