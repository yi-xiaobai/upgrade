

//* 层序遍历  一层一层进行遍历获取到数据

//*  BFS  广度优先遍历 + 队列

//* 题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。


const levelOrder = function (root) {
    // 定义返回数据数组
    const res = []

    // 定义队列
    const queue = []

    if (!root) {
        return res
    }

    // 添加root节点至队列中
    queue.push(root)

    while (queue.length) {
        // 每一层的数据
        const level = []

        // 获取队列长度 每一层可能都不同
        const len = queue.length

        for (let i = 0; i < len; i++) {
            // 获取队列头部的值
            const top = queue.shift()
            level.push(top.val)

            // 有左子树
            if (top.left) {
                queue.push(top.left)
            }

            // 有右子树
            if (top.right) {
                queue.push(top.right)
            }
        }
        res.push(level)
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


console.log(levelOrder(root));