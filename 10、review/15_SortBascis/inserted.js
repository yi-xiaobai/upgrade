/**
 * 插入排序
 * @param {*} arr
 * @returns
 */
function insert(arr) {
  if (!arr || arr.length <= 1) {
    return;
  }

  // 缓存数组长度
  const len = arr.length;

  let temp;

  // i 从 1 开始
  for (let i = 1; i < len; i++) {
    let j = i;

    temp = arr[i];

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
}

const arr = [6, 2, 9, 10, 1, 8];

insert(arr);
console.log("==>Get arr", arr);
