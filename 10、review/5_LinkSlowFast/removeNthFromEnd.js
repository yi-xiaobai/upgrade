/**
 * 删除链表倒数第n个元素
 * @param {*} head
 * @param {*} n
 */
const removeNthFromEnd = function (head, n) {
  // 定义一个dummy节点
  const dummy = new LinkNode();
  // 指向头节点
  dummy.next = head;

  // 定义快慢指针
  let slow = dummy,
    fast = dummy;

  // 快指针先走 n 步
  while (n >= 0) {
    fast = fast.next;
    n--;
  }

  // 快慢指针一起走
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // 此时slow指针就是  被删除元素的前驱节点
  // 只需要把next指针指向 后一个节点即可
  slow.next = slow.next.next;

  return dummy.next;
};

function LinkNode() {
  this.next = null;
}
