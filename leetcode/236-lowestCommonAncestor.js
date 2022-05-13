/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    return (left && right) ? root : (left||right||null);
};



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);
let n9 = new TreeNode(9);
let n10 = new TreeNode(10);

n5.left = n4;
n5.right = n6;

n4.left = n3;
n4.right = n2;

n6.left = n7;
n6.right = n8;

n7.left = n9;
n7.left = n10;

n2.left = n1;

console.log(lowestCommonAncestor(n5, n1, n2))