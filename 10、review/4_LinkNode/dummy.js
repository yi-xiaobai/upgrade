/**
 * 删除所有重复的
 * @param {*} head
 */
const deleteDuplicatesAll = function (head) {
  // 创建一个dummy节点 人为创造的 这样链表中所有的节点都有前驱节点
  const dummy = new LinkNode();
  dummy.next = head;

  let cur = dummy;

  // cur后至少两个节点
  while (cur.next && cur.next.next) {
    // 节点值相同
    if (cur.next.val === cur.next.next.val) {
      // 保存当前节点值
      let val = cur.next.val;
      // 反复遍历 把当前链表中的节点值都覆盖掉
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  // 返回头节点
  return dummy.next;
};

function LinkNode() {
  this.next = null;
  this.val = null;
}
