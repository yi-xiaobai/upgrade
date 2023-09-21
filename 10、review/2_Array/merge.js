/**
 * 合并两个有序数组
 * @param {*} nums1
 * @param {*} m
 * @param {*} nums2
 * @param {*} n
 */
function merge(nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  // 两个数组都没有遍历完 指针同步移动
  while (i >= 0 && j >= 0) {
    // 谁的数字大 像nums1后面放置
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  // 如果nums1遍历完了  nums2还没有遍历完
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1); // [ 1, 2, 2, 3, 5, 6 ]
