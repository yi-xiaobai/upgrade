

//* 给定一个二叉树，判断它是否是高度平衡的二叉树。

/**
 * 任意节点
 * 左右子树差 不大于1
 * 二叉搜索数
 */


const isBalanced = function (root) {
    // 标志位  当flag为 false时 当前肯定不是一颗二叉树
    let flag = true

    function dfs(root) {
        // 如果没有根节点或者 flag = false 直接return
        if (!root || !flag) {
            return false
        }

        // 计算左子树高度
        const left = dfs(root.left)

        // 计算右子树高度
        const right = dfs(root.right)

        // 绝对值大于 1了 直接return
        if (Math.abs(left - right) > 1) {
            flag = false
            return 0
        }

        // 返回当前子树的高度
        return Math.max(left, right) + 1
    }

    // 首次判断
    dfs(root)

    // 返回标志位
    return flag
}