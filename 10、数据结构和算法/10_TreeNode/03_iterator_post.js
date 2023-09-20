


//* 二叉树后序遍历  迭代实现

//* 后序遍历：左-->右-->根


const postorderTraversal = function (root) {
    // 根节点不存在 返回一个数组
    if (!root) return []

    // 存储结果的数组
    const res = []

    // 定义一个栈
    const stack = []
    // 添加根节点数据
    stack.push(root)
    while (stack.length) {
        // 取出当前栈顶元素
        const cur = stack.pop()

        // 将数据添加到头部
        res.unshift(cur.val)

        // 有左边的孩子
        if (cur.left) {
            stack.push(cur.left)
        }

        // 有右边的孩子
        if (cur.right) {
            stack.push(cur.right)
        }

        //* 这样右边的数据会比左边的数据先进入数组
    }


    return res
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


console.log(postorderTraversal(root));
