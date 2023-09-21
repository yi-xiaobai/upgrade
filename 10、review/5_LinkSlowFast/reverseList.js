/**
 * 完全反转链表
 * @param {*} head
 */
const reverseList = function (head) {
  if (!head) {
    return;
  }
  // 定义上一个节点
  let pre = null
  // 当前节点
  let cur = head

  while(cur !== null){
    // 获取next指针
    let next = cur.next
    // next指针指向改变
    cur.next = pre
    // 反转后 当前节点就是上一个节点
    pre = cur
    // 走到下一个节点
    cur = next
  }
  return pre
};
