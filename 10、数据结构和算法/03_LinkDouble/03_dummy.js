
//* 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
//* dummy节点永远指向头节点


// 定义链表构造函数
function LinkNode(val, next) {
    this.val = val
    this.next = next
}



const deleteDuplicates = function (head) {
    // 如果头节点不存在 或者没有下个节点 直接返回头节点
    if (!head || !head.next) {
        return head
    }

    // 定义dummy节点
    let dummy = new LinkNode()
    // dummy永远指向头节点
    dummy.next = head

    let cur = dummy

    while (cur.next && cur.next.next) {
        // 如果前后两个节点值相同
        if (cur.next.val === cur.next.next.val) {
            // 记下该值
            let val = cur.next.val
            // 返回排查后续的值是否相同 如果相同 就去掉
            while (cur.next && val === cur.next.val) {
                cur.next = cur.next.next
            }
        } else {
            // cur往前走
            cur = cur.next
        }
    }
    return dummy.next
}


let node1 = new LinkNode(1)
node1.next = new LinkNode(2)
node1.next.next = new LinkNode(3)
node1.next.next.next = new LinkNode(3)
node1.next.next.next.next = new LinkNode(4)
node1.next.next.next.next.next = new LinkNode(4)
node1.next.next.next.next.next.next = new LinkNode(5)




let res = deleteDuplicates(node1)
while (res) {
    console.log(res.val);
    res = res.next
}
