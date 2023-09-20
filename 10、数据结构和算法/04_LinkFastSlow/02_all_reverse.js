

//* 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
//* 示例:  输入: 1->2->3->4->5->NULL  输出: 5->4->3->2->1->NULL


// 定义链表构造函数
function LinkNode(val, next) {
    this.val = val
    this.next = next
}

const reverseList = function (head) {
    if (!head) return

    let pre = null
    let cur = head
    while (cur) {
        // 记录当前节点的next指针
        let next = cur.next

        // 将当前节点的next指针 反转
        cur.next = pre

        // pre节点往下走
        pre = cur

        // 当前节点往下走
        cur = next
    }

    // 反转结束后  pre会成为头节点
    return pre
}


const node = new LinkNode(1)
node.next = new LinkNode(2)
node.next.next = new LinkNode(3)
node.next.next.next = new LinkNode(4)
node.next.next.next.next = new LinkNode(5)

let res = reverseList(node)
while (res) {
    console.log(res.val);
    res = res.next
}