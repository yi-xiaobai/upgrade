//* 全部反转链表

const reverseList = function (head) {
  if (!head) return;

  // 定义上个节点
  let pre = null;
  // 定义当前节点
  let cur = head;
  while (cur) {
    // 保存当前节点的下个节点
    let next = cur.next;
    // 返回
    cur.next = pre;

    // 上个节点往前走
    pre = cur;

    // 当前节点往前走
    cur = next;
  }

  // 反转结束后 pre是头节点
  return pre;
};
