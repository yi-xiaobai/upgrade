// 二叉树的前序遍历、中序遍历、后序遍历

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

// 前序遍历
function preorder(root) {
  // 根节点不存在 return
  if (!root) {
    return null;
  }

  console.log("==>Get 当前节点的值：", root.val);
  preorder(root.left);
  preorder(root.right);
}

// preorder(root);

// 中序遍历
function inorder(root) {
  if (!root) {
    return null;
  }

  inorder(root.left);
  console.log("==>Get 当前节点的值：", root.val);
  inorder(root.right);
}

// inorder(root)

// 后序遍历
function postorder(root) {
  if (!root) {
    return null;
  }

  postorder(root.left);
  postorder(root.right);
  console.log("==>Get 当前节点的值：", root.val);
}

postorder(root)
