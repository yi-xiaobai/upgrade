/**
 * 合并两个有序链表
 * @param {*} l1
 * @param {*} l2
 */
const mergeList = (l1, l2) => {
  // 定义头节点
  const head = new LinkNode();

  let cur = head;

  while (l1 && l2) {
    // l1节点值 小于 l2节点值
    if (l1.val < l2.val) {
      // next指针 指向l1
      cur.next = l1;
      // l1向下走
      l1 = l1.next;
    } else {
      // next指针 指向l2
      cur.next = l2;
      // l2向下走
      l2 = l2.next;
    }
    // cur指针向下走
    cur = cur.next;
  }

  // 如果l2完了  l1没有完 则next指针直接指向 l1指针  否则l2指针
  cur.next = l1 != null ? l1 : l2;
  return head.next;
};

function LinkNode(val) {
  this.val = val;
}
