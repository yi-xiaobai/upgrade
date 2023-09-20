


//* 二叉树中序遍历  迭代实现

//* 前序遍历：左-->根-->右


//* 找到最左边的节点  得到父节点以及兄弟节点就比较容易了
const inorderTraversal = function (root) {
    // 定义一个栈
    const stack = []

    // 返回结果
    const res = []

    // 指向root
    let cur = root

    // 当cur存在 或者  栈中还有数据
    while (cur || stack.length) {

        // 找到最左侧的节点
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        // 弹出最末尾的节点
        cur = stack.pop()
        // 添加至返回结果数组中
        res.push(cur.val)
        // 寻找右侧节点
        cur = cur.right
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


console.log(inorderTraversal(root));