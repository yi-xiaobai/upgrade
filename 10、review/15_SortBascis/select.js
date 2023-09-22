/**
 * 插入排序
 * @param {*} arr
 */
function select(arr) {
  // 数组不存在 或者长度不够
  if (!arr || arr.length <= 1) {
    return;
  }

  // 缓存数组长度
  const len = arr.length;

  let minIndex;

  for (let i = 0; i < len - 1; i++) {
    // 设置当前索引为 最小的索引
    minIndex = i;

    for (let j = i; j < len; j++) {
      // 如果j索引对应的元素小于 minIndex位置的元素
      // 那么 最小索引就是j
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 循环完了 再次对比 两者不同 交换位置
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
}

const arr = [6, 2, 9, 10, 1, 8];

select(arr);
console.log("==>Get arr", arr);
