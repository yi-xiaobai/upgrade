// 深度优先队列

// 本质上就是二叉树的前序遍历
function preorder(root) {
  if (!root) {
    return;
  }

  console.log("==>Get 当前元素节点值：", root.val);
  preorder(root.left);
  preorder(root.right);
}
