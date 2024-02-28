//* 删除倒数第几个节点

const removeNthFromEnd = function (head, n) {
  if (!head) {
    return;
  }

  const dummy = new LinkNode();
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  while (n) {
    fast = fast.next;
    n--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

function LinkNode(val, next) {
  this.val = val;
  this.next = next;
}
