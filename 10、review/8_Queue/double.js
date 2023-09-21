// 双端队列：维护一个有效的递减队列
const maxSlidingWindow = function (nums, k) {
  // 长度
  const len = nums.length;

  // 初始化结果数组
  let res = [];

  // 初始化双端队列
  let deque = [];

  for (let i = 0; i < len; i++) {
    // 检查双端队列的递减性有没有被破坏
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      // 如果被破坏了  弹出元素
      deque.pop();
    }

    // 双端列表加入当前元素  索引
    deque.push(i);

    // 如果队列头不在  区间范围内 需要移除
    while (deque.length && deque[0] <= i - k) {
      // 移除头部元素
      deque.shift();
    }

    // 到了一个区间范围
    if (i >= k - 1) {
      res.push(deque[0]);
    }
  }

  // 返回结果数组
  return res;
};
