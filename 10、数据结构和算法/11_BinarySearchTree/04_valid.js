


//* 二叉搜索树的验证
const isValidBST = function (root) {

    // 定义递归函数
    function dfs(root, minValue, maxValue) {
        // 空树 返回true
        if (!root) {
            return true
        }
        // 如果当前节点的值  小于最小值 或者大于最大值  返回false
        if (root.val <= minValue || root.val >= maxValue) {
            return false
        }

        // 左子树 不能大于根节点的值  右子树不能小于根节点的值
        return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)

    }

    // 初始化 最小/最大值
    return dfs(root, -Infinity, Infinity)
}