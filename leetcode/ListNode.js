/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var n1 = new ListNode(1);

var n2 = new ListNode(9);
var n3 = new ListNode(8);

var n4 = new ListNode(9);

var n5 = new ListNode(9);
var n6 = new ListNode(8);

var n7 = new ListNode(9);
var n8 = new ListNode(9);

//n1.next = n2;

n2.next = n3;

//n3.next = n4;
//n4.next = n5;
n5.next = n6;

n6.next = n7;
n7.next = n8;

var addTwoNumbers = function(l1, l2) {
  var result = new ListNode(-1);
  var subFlag = 0;
  var curr = result;
  while(l1 || l2){
    var val1 = l1 ? l1.val : 0;
    var val2 = l2 ? l2.val : 0;
    var val = val1 + val2 + subFlag;
    if(val >= 10){
      val = val-10;
      subFlag = 1;
    }else{
      subFlag = 0;
    }
    curr.next = new ListNode(val);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if(subFlag){
    curr.next = new ListNode(1);  
  }
  return result.next;
};

var result = addTwoNumbers(n1, n2);
var node1 = result;
// console.log("-----------")
// do{
//   console.log(node1.val);
//   node1 = node1.next;
// }while(node1)




// [2,3,4,7,9]
// [1,7]

// 30579

// [1,2,3]
// [9,8,7]
// [1110]

// [1,7]
// [2,3,4,7,9]



// if(node2){
//   var val = node1.val + node2.val + subFlag;
//   if(val >= 10){
//     val = val-10;
//     subFlag = 1;
//   }else{
//     subFlag = 0;
//   }
//   node1.val = val;
//   node1 = node1.next;
//   node2 = node2.next;
// }else{
//   if(node1){
//     node1.val = node1.val + subFlag;
//   }else{
//     if(subFlag) node1 = new ListNode(1)
//   }
//   break;     
// }