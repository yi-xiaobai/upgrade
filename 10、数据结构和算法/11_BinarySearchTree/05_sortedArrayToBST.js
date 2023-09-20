


//* 将排序数组转化为二叉搜索树


const sortedArrayToBST = function (nums) {
    if (!nums || !nums.length) {
        return null
    }


    // 定义二叉树构造函数
    function buildBST(low, high) {
        if (low > high) {
            return
        }
        // 获取中间值
        const mid = Math.floor(low + (high - low) / 2)
        // 设置当前节点
        const cur = new TreeNode(nums[mid])

        // 设置左子树值
        cur.left = buildBST(0, mid - 1)

        // 设置右子树值
        cur.right = buildBST(mid + 1, high)

        // 返回当前节点
        return cur
    }

    // 首次执行二叉搜索树函数
    return buildBST(0, nums.length - 1)
}



function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}


console.log(sortedArrayToBST([-10,-3,0,5,9]));