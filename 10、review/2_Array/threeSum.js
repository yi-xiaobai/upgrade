/**
 * 三数求和问题  不重复结果
 * @param {*} nums
 */
function threeSum(nums) {
  // 结果数组
  let res = [];
  // 获取数组长度
  const len = nums.length;

  // 排序
  nums = nums.sort((a, b) => {
    return a - b;
  });

  //* len - 2 因为我们有左右指针  会遍历到倒数两个数
  for (let i = 0; i < len - 2; i++) {
    //* j是当前元素的下一个  k则是最后一个元素
    let j = i + 1,
      k = len - 1;

    // 遇到重复的数字 跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (j < k) {
      const count = nums[i] + nums[j] + nums[k];
      // 证明右边大了  需要右边索引减小
      if (count > 0) {
        k--;

        // 如果后续的 k 跟当前k相同  直接跳过 避免重复计算
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
      // 证明左边小了 需要左边索引增加
      else if (count < 0) {
        j++;
        // 如果后续的值跟当前值相同  也是直接跳过 避免重复计算
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      }
      // 刚好相等
      else {
        // 添加进结果数组
        res.push([nums[i], nums[j], nums[k]]);

        // 索引同时增加/减小
        j++;
        k--;

        // 如果后续元素的值个当前元素的值相同 则直接跳过
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
