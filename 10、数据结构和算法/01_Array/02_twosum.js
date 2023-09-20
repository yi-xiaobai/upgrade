

//* 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//* 示例: 给定 nums = [2, 7, 11, 15], target = 9 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]


const twosum = function (nums, target) {
    const diff = {}
    // 获取数组长度
    const LEN = nums.length
    for (let i = 0; i < LEN; i++) {
        if (diff[target - nums[i]] !== undefined) {
            return [diff[target - nums[i]], i]
        } else {
            // 记录当前值 和 索引
            diff[nums[i]] = i
        }
    }
}

const arr = [3, 9, 10, 20]
console.log(twosum(arr, 19));