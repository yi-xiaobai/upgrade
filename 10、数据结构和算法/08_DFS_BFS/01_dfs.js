


//* 深度优先搜索：不撞南墙不回头  每一种情况都会走到底  走不下去了 再返回走
//* 本质是：栈结构
//* 二叉树的先序遍历就是深度优先搜索思想的递归实现



const preorder = function (root) {
    if (!root) return

    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}

const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};


preorder(root)