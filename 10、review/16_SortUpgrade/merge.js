/**
 * 归并排序 先分割 再合并
 * @param {*} arr
 */
function mergeSort(arr) {
  // 数组长度小于1 返回数组
  if (arr.length <= 1) {
    return arr;
  }

  // 取中间值 向下取整
  const mid = Math.floor(arr.length / 2);

  // 左边部分
  const left = mergeSort(arr.slice(0, mid));

  // 右边部分
  const right = mergeSort(arr.slice(mid));

  // 最后合并
  return mergeArr(left, right);
}

function mergeArr(arr1, arr2) {
  let ans = [];
  let i = 0,
    j = 0;

  while (i <= arr1.length && j < arr2.length) {
    // 比较大小
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  // 如果 i 或者 j提前结束了
  if (i <= arr1.length) {
    ans = ans.concat(arr1.slice(i));
  } else if (j <= arr2.length) {
    ans = ans.concat(arr2.slice(j));
  }
  return ans;
}

const lists = [8, 1, 2, 10, 9, 5, 7];
console.log(mergeSort(lists));
