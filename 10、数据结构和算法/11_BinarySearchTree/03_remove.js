

//* 删除指定结点


function deleteNode(root, n) {
    if (!root) {
        return root
    }


    if (root.val === n) {
        // 如果没有子树
        if (!root.left && !root.right) {
            root = null
        } else if (root.left) {
            // 计算左子树的最大值
            let maxNode = findMax(root.left)

            // 将值赋给当前root
            root.val = maxNode.val

            root.left = deleteNode(root.left, maxNode.val)
        } else {
            // 计算右子树的最小值
            let minNode = findMin(root.right)

            // 将值赋给当前root
            root.val = minNode.val

            root.right = deleteNode(root.right, minNode.val)
        }

    } else if (root.val > n) {
        // 当前值比n大  则在左子树查找数据
        root.left = deleteNode(root.left, n)
    } else {
        // 当前值比n小  则在右子树查找数据
        root.right = deleteNode(root.right, n)
    }

    return root
}

// 寻找左子树最大值
function findMax(root) {
    while (root.right) {
        root = root.right
    }
    return root
}

// 寻找右子树的最小值
function findMin(root) {
    while (root.left) {
        root = root.left
    }
    return root
}


const root = {
    val: 5,
    left: {
        val: 3,
        left: {
            val: 2
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 6,
        right: {
            val: 7
        }
    }
};


console.log(deleteNode(root, 6));