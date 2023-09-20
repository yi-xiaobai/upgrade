


//* 广度优先遍历：层级遍历吧  一层一层遍历取自己需要的数据




const BFS = function (root) {
    if (!root) return


    const queue = []
    queue.push(root)


    while (queue.length) {
        // 取队头第一个数组
        const res = queue[0]

        console.log('==>Get val', res.val);

        // 左子树存在
        if (res.left) {
            queue.push(res.left)
        }

        // 右子树存在
        if (res.right) {
            queue.push(res.right)
        }

        // 队头弹出
        queue.shift()
    }
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
BFS(root)