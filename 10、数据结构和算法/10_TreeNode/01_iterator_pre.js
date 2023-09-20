


//* 二叉树前序遍历  迭代实现

//* 前序遍历：根-->左-->右



const preorderTraversal = function (root) {
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
        res.push(cur.val)

        // 有右边的孩子
        if (cur.right) {
            stack.push(cur.right)
        }

        // 有左边的孩子
        if (cur.left) {
            stack.push(cur.left)
        }

        //* 这样 左边的数据会比 右边的数据先进入数组
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


console.log(preorderTraversal(root));
