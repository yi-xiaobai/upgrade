


//* 链表合并
//* 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 




// 定义链表构造函数
function LinkNode(val, next) {
    this.val = val
    this.next = next
}



const merge = function (l1, l2) {
    // 定义头节点
    const head = new LinkNode()
    let cur = head
    while (l1 && l2) {
        // l1的值小
        if (l1.val <= l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        // cur指针往前走
        cur = cur.next
    }
    console.log('l1', l1);
    console.log('l2', l2);
    // l1  l2不等长情况处理
    cur.next = l1 ? l1 : l2

    return head.next
}


const l1 = new LinkNode(1)
l1.next = new LinkNode(2)
l1.next.next = new LinkNode(4)


const l2 = new LinkNode(1)
l2.next = new LinkNode(3)
l2.next.next = new LinkNode(4)


let ans = merge(l1, l2)
console.log('==>Get ans', ans);
while(ans){
    console.log(ans.val);
    ans = ans.next
}