/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let pre = head;
    while(n>0){
        pre = pre.next;
        n--
    }
    let back = head;

    if(!pre) return head.next;
    while(pre.next){
        back = back.next;
        pre = pre.next;
    }
    back.next = back.next.next;
    return head;
};
let head = new ListNode(1)

removeNthFromEnd(head,1)