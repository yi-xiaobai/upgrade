


//* 根据二叉搜索树 构造一棵  平衡二叉搜索数

//* 二叉搜索树的中序遍历是有序的


/**
 * 1. 先得到二叉搜索树的中序遍历结果
 * 2. 根据结果合成 平衡二叉搜索树
 */


function balanceBST(root) {

    // 定义中序遍历数组
    const nums = []

    // 中序遍历函数
    function inorder(root) {
        if (!root) {
            return
        }
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }


    function buildAVL(low, high) {
        if (low > higt) {
            return null
        }

        // 获取中间值
        const mid = Math.floor(low + (high - low) / 2)

        // 获取当前节点
        const cur = new TreeNode(nums[mid])

        // 设置左子树
        cur.left = buildAVL(low, mid - 1)

        // 设置右子树
        cur.right = buildAVL(mid + 1, high)

        // 返回当前节点
        return cur
    }


    // 执行中序遍历
    inorder(root)

    // 构造成平衡二叉树
    return buildAVL(0, nums.length - 1)
}


function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}