// 广度优先队列

// 一层一层获取所需要的数据

function BFS(root) {
  // 定义一个队列
  let queue = [];

  // 入队
  queue.push(root);
  while (queue.length) {
    // 队头元素
    const top = queue[0];
    console.log("==>Get 元素值为：", top.val);

    // 存在左子树
    if (top.left) {
      queue.push(top.left);
    }

    // 存在右子树
    if (top.right) {
      queue.push(top.right);
    }

    // 队头元素弹出
    queue.shift();
  }
}
