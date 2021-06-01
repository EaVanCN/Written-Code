/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
//  var mergeTwoLists = function(l1, l2) {
//     if(!l1) return l2;
//     if(!l2) return l1;
//     let resultArr = [];
//     while(l1 && l2){
//         if(l1.val < l2.val){
//             resultArr.push(l1.val)
//             l1 = l1.next
//         }else{
//             resultArr.push(l2.val)
//             l2 = l2.next
//         }
//     }
//     while(l1){
//         resultArr.push(l1.val)
//         l1 = l1.next
//     }
//     while(l2){
//         resultArr.push(l2.val)
//         l2 = l2.next
//     }
//     let arr = resultArr.map((item)=>{
//         return new ListNode(item, null)
//     })

    



//     return arr[0]
// };


// var l13 = {
//     val: 4,
//     next: undefined
// }

// var l12 = {
//     val: 2,
//     next: l13
// }

// var l1 = {
//     val: 1,
//     next: l12
// }

// var l23 = {
//     val: 4,
//     next: undefined
// }

// var l22 = {
//     val: 3,
//     next: l23
// }

// var l2 = {
//     val: 1,
//     next: l22
// }

mergeTwoLists(l1,l2)

var mergeTwoLists = function(l1, l2) {
    return l1 && l2 && {
        val: Math.min(l1.val, l2.val),
        next: l1.val < l2.val && mergeTwoLists(l1.next, l2) || mergeTwoLists(l1, l2.next)  
    } || l1 || l2
};