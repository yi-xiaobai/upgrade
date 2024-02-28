//* 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次

const deleteDuplicates = function (head) {
  if (!head) return;

  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
