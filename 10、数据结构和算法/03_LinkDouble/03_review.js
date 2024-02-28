//* 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

const deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const dummy = new LinkNode();
  dummy.next = head;

  let cur = dummy;

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val;
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};

function LinkNode(val, next) {
  this.val = val;
  this.next = next;
}
