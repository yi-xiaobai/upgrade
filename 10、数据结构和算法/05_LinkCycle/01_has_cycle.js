

//*：给定一个链表，判断链表中是否有环。



// 定义链表构造函数
function LinkNode(val, next) {
    this.val = val
    this.next = next
}



const hasCycle = function (head) {
    // 当头节点存在
    while (head) {
        // 说明成环
        if (head.flag) {
            return true
        } else {
            head.flag = true
            head = head.next
        }
    }
    return false
}



const node =new LinkNode(1)
node.next = new LinkNode(2)
node.next.next = new LinkNode(3)
node.next.next.next = node 


console.log(hasCycle(node));    //* true