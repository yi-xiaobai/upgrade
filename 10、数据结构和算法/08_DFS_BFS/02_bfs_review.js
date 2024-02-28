//* 广度优先遍历：层级遍历

const bfs = function (root) {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const res = queue[0];

    console.log("==>Get res.val", res.val);
    if (res.left) {
      queue.push(res.left);
    }

    if (res.right) {
      queue.push(res.right);
    }

    queue.shift();
  }
};
