//* 二叉树
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}


const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)
root.right.left = new TreeNode(6)
console.log(root);


//* 二叉树的前序遍历   根节点==>左节点==>右节点
function preOrder(root) {
    // 节点不存在 直接return
    if (!root) return
    // 打印根节点的值
    console.log('==>Get val', root.val);
    preOrder(root.left)
    preOrder(root.right)
}
// preOrder(root)

//* 二叉树的中序遍历   左节点==>根节点==>右节点

function inOrder(root) {
    if (!root) return
    inOrder(root.left)
    // 打印根节点的值
    console.log('==>Get val', root.val);
    inOrder(root.right)
}
// inOrder(root)

//* 二叉树的后序遍历   左节点==>右节点==>根节点
function postOrder(root){
    if (!root) return
    postOrder(root.left)
    postOrder(root.right)
    // 打印根节点的值
    console.log('==>Get val', root.val);
}
postOrder(root)

