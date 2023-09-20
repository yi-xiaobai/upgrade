


//* 插入新结点

/**
 * 如果当前节点为空  相当于被插入的节点可以放到当前位置 
 * 因为二叉搜索树的特性 沿着一条路走下去  走不下去了 代表当前位置是空的
 */



function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}


function insertIntoBST(root, n) {
    // 当前节点不存在
    if (!root) {
        // 将n值放到当前空值处
        root = new TreeNode(n)
        return root
    }

    // 当前值比n大
    if (root.val > n) {
        root.left = insertIntoBST(root.left, n)
    } else {
        root.right = insertIntoBST(root.right, n)
    }
    return root
}


const root = {
    val: 7,
    left: {
        val: 3,
        left: {
            val: 1
        },
        right: {
            val: 8
        }
    },
    right: {
        val: 10,
        right: {
            val: 12
        }
    }
};


console.log(insertIntoBST(root, 4));