


//* 查找数据域为某一特定值的结点
/**
 * 如果没有找到 返回 null
 * 如果找到了 返回 true
 ** 如果当前值大于被查找值  下一次去左子树查找
 ** 如果当前值小于被查找值  下一次去右子树查找
 */


function search(root, n) {
    // 根节点不存在
    if (!root) {
        return null
    }

    // 找到了
    if (root.val === n) {
        console.log('节点已找到');
        return true
    }
    // 大于查找值
    else if (root.val > n) {
        search(root.left, n)
    } else {
        search(root.right, n)
    }
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

console.log(search(root, 12));
console.log(search(root, 1));
console.log(search(root, 0));