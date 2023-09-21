/**
 * 删除重复节点 只保留其中一个
 * @param {*} head
 */
const deleteDuplicates = function (head) {
  const cur = head;

  // 当前节点存在且下一个节点存在
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      // 走到下下个节点
      cur = cur.next.next;
    } else {
      // 走到下一个节点
      cur = cur.next;
    }
  }
  return head;
};
