/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    var map = new Map();
    map.set(headA,headA.next);
    let point = headA.next
    while(point){
        map.set(point, point.next);
        point = point.next
    }
    let point2 = headB;
    while(point2){
        if(map.has(point2)){
            return point2;
        }
        point2 = point2.next
    }
    return null;
};