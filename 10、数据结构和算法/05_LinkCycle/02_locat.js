//* 定位环
//* 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。


// 定义链表构造函数
function LinkNode(val, next) {
    this.val = val
    this.next = next
}


const detectCycle = function (head) {
    if (!head) return false

    while (head) {
        if (head.flag) {
            return head
        } else {
            head.flag = true
            head = head.next
        }
    }
    return null
}


const node = new LinkNode(1)
node.next = new LinkNode(2)
node.next.next = new LinkNode(3)
node.next.next.next = new LinkNode(4)
node.next.next.next.next = node.next
console.log(detectCycle(node).val); // 2


