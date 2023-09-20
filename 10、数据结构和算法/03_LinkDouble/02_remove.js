

//* 链表删除
//* 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。


function LinkNode(val, next) {
    this.val = val
    this.next = next
}


/**
 * 删除重复的节点
 * @param {LinkNode} head 
 */
const deleteDuplicates = function (head) {
    if (!head) return
    let cur = head

    // 当前节点存在且当前节点的下一个节点存在
    while (cur && cur.next) {
        //如果当前节点和下一个节点相同  则删除下一个节点
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}


const l1 = new LinkNode(1)
l1.next = new LinkNode(2)
l1.next.next = new LinkNode(3)


let res = deleteDuplicates(l1)
while (res) {
    console.log(res.val);
    res = res.next
}