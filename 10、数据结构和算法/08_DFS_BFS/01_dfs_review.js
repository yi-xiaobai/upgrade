//* 深度优先遍历  不撞南墙不回头 就是二叉树的前序遍历

const preorder = function (root) {
  if (!root) return;

  console.log("==>Get root.val", root.val);

  preorder(root.left);
  preorder(root.right);
};
