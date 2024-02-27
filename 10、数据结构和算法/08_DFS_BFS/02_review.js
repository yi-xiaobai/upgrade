// 广度优先遍历

const bfs = function (root) {
  if (!root) return;

  const queue = [];
  queue.push(root);

  while (queue.length) {
    // 获取队列中第一个数据
    const res = queue[0];
    console.log("==>Get 值：", res.val);

    // 如果左子树数据存在 添加进队列
    if (res.left) {
      queue.push(res.left);
    }

    // 如果右子树数据存在 添加进队列
    if (res.right) {
      queue.push(res.right);
    }

    // 队头弹出
    queue.shift();
  }
};
