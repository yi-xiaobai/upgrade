


//* 翻转一棵二叉树。  每一棵子树的左孩子和右孩子都发生了交换


const invertTree = function (root) {
    if (!root) {
        return
    }

    // 获取节点右子树
    const right = invertTree(root.right)
    // 获取节点左子树
    const left = invertTree(root.left)

    // 当前节点左子树  等于 右子树
    root.left = right
    root.right = left

    return root
}



const root = {
    val: "A",
    left: {
        val: "B",

    },
    right: {
        val: "C",

    }
};


console.log(invertTree(root));
