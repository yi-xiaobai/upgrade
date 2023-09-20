
//* 回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试。



//* 给定一个没有重复数字的序列，返回其所有可能的全排列。
//* 示例：   输入: [1,2,3]输出: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


const permute = function (nums) {
    const res = []

    const curr = []

    const len = nums.length

    const visited = {}

    dfs(0)

    function dfs(nth) {
        // 达到了条件 需要
        if (nth === len) {
            res.push(curr.slice())
            return
        }

        for (let i = 0; i < len; i++) {
            if (!visited[nums[i]]) {
                // 标记已用过 标识
                visited[nums[i]] = 1

                // 推入当前队列
                curr.push(nums[i])

                dfs(nth + 1)

                // 移除已用过标识
                visited[nums[i]] = 0

                // 让出当前坑位
                curr.pop()
            }
        }
    }

    return res
}


console.log(permute([1, 2, 3]));