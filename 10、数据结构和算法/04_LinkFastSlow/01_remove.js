//* 快慢指针



//* 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
//* 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.当删除了倒数第二个结点后，链表变为 1->2->3->5.



// 定义链表构造函数
function LinkNode(val, next) {
    this.val = val
    this.next = next
}



const removeNthFromEnd = function (head, n) {
    if (!head) return

    const dummy = new LinkNode()
    dummy.next = head

    // 定义快指针
    let fast = dummy
    // 定义慢指针
    let slow = dummy


    // 先让快指针往前走n步
    while (n > 0) {
        fast = fast.next
        n--
    }


    while (fast.next) {
        // 快慢指针一起走
        fast = fast.next
        slow = slow.next
    }


    // 慢指针指向下下个指针 相当于删除了慢指针的下个指针
    slow.next = slow.next.next

    // 返回头节点
    return dummy.next
}


const node = new LinkNode(1)
node.next = new LinkNode(2)
node.next.next = new LinkNode(3)
node.next.next.next = new LinkNode(4)

let res = removeNthFromEnd(node, 3)
while (res) {
    console.log(res.val);
    res = res.next
}


