


/**
 * 给定一个链表，判断链表中是否有环
 * @param {*} head 
 */
const hasCycle = function(head){
    while(head){
        if (head.flag) {
            return true
        }else {
            head.flag = true
            head = head.next
        }
    }
    return false
}