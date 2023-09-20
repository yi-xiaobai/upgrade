


// 链表
function LinkList(val, next) {
    this.val = val
    this.next = next
}


//* 创建一个链表
const node1 = new LinkList(1, null)
node1.next = new LinkList(2)
console.log(node1);


const node3 = new LinkList(3)

// 把node3的 next 指针指向 node2
node3.next = node1.next

// 把node1的 next 指针指向 node3
node1.next = node3

console.log(node1);


//* 删除一个节点
const node4 = new LinkList(4)
node4.next = new LinkList(5)
node4.next.next = new LinkList(6)
console.log('==>Get node4', node4);

//* 删除node5节点
node4.next = node4.next.next
console.log('==>Get node4', node4);


//* 链表的插入/删除效率高 访问效率低
//* 数组的访问效率高  插入/删除效率低 
