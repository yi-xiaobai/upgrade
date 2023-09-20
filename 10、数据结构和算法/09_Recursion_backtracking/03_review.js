//* 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

/**
 * 输出:
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]
 */


const combine = function (n, k) {
    // 存储返回结果的数组
    const res = []

    const curr = []

    // 从1开始
    dfs(1)

    function dfs(index) {
        // 如果数量等于 k  添加数组至res中  return
        if (curr.length === k) {
            // 添加curr的符本 避免curr
            res.push(curr.slice())
            return
        }

        for (let i = index; i <= n; i++) {
            // 添加
            curr.push(i)

            // 基于当前数字存在于组合中的情况，进一步 dfs
            dfs(i + 1)

            // 数据弹出数组
            curr.pop()
        }
    }
    return res
}

console.log(combine(4, 2));