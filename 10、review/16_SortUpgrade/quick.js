/**
 * 快速排序
 * @param {*} arr
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  // 长度 1的 数组 没有必要进行排序
  if (arr.length <= 1) {
    return arr;
  }
  let index = partition(arr, left, right);

  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }

  if (index < right) {
    quickSort(arr, index, right);
  }

  return arr;
}

function partition(arr, left, right) {
  // 找基准值
  let value = arr[Math.floor(left + (right - left) / 2)];

  let i = left;
  let j = right;

  while (i <= j) {
    // arr[i] 小于基准值 左指针 ++
    while (arr[i] < value) {
      i++;
    }

    // arr[j] 大于 基准值   右指针 --
    while (arr[j] > value) {
      j--;
    }

    while (i <= j) {
      swap(arr, i, j);
      // 指针同时前进一步
      i++;
      j--;
    }
  }

  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const lists = [8, 1, 2, 10, 9, 5, 7];
console.log(quickSort(lists));
