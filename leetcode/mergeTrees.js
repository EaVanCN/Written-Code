/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(5);

var n5 = new TreeNode(1);
var n6 = new TreeNode(2);
var n7 = new TreeNode(3);
var n8 = new TreeNode(4);
var n9 = new TreeNode(7);

n1.left = n3;
n1.right = n2;
n3.left = n4;

n6.left = n5;
n6.right = n7;
n5.right = n8;
n7.right = n9;


/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1) return t2; 
    if (!t2) return t1;
    t1.val = (t1 ? t1.val : 0) + (t2 ? t2.val : 0)
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};

var n = mergeTrees(n1, n6);
var showVal = function(node){
    console.log(node.val)
    if(node.left){showVal(node.left)};
    if(node.right){showVal(node.right)};
}
showVal(n);