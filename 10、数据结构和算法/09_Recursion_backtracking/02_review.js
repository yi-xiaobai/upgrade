//* 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。说明：解集不能包含重复的子集。

/**
 * 示例: 输入: nums = [1,2,3]
输出:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
 */


const subsets = function (nums) {
    // 存储最终结果的数组
    const res = []

    // 当前元素数组
    const curr = []

    // 数组长度
    const len = nums.length

    dfs(0)

    function dfs(index) {
        // 直接添加当前curr数据进入res  子集每个都不相同
        res.push(curr.slice())

        for (let i = index; i < len; i++) {
            // 添加当前数据  进入  curr
            curr.push(nums[i])

            dfs(i + 1)

            curr.pop()
        }
    }

    return res
}


console.log(subsets([1, 2, 3]));