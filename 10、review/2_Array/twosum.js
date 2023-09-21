/**
 * 两数求和问题
 * @param {*} nums
 * @param {*} target
 */
function twoSum(nums, target) {
  const diff = {};

  // 数组长度
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // 存在目标结果数据  返回对应索引数据
    if (diff[target - nums[i]] !== undefined) {
      return [diff[target - nums[i]], i];
    } else {
      // 不符合条件 记录索引
      diff[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 5, 7, 10], 15));
