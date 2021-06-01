/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var root1 = {
    val: 1
}
var root7 = {
    val: 7
}
var root9 = {
    val: 9
}
var root2 = {
    val: 2,
    left: root1
}
var root4 = {
    val: 4
}
var root8 = {
    val: 8,
    left: root7,
    right: root9
}
var root3 = {
    val: 3,
    left: root2,
    right: root4
}
var root6 = {
    val: 6,
    right: root8
}
var root5 = {
    val: 5,
    left: root3,
    right: root6
}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var increasingBST = function(root) {
    const treeNode = []
    const dummyNode = new TreeNode(-1);
    var stFun = node=>{
        if(node.left){
            stFun(node.left);
        }
        treeNode.push(node.val)
        if(node.right){
            stFun(node.right);
        }
    }
    stFun(root)
    let currNode = dummyNode;
    for (const value of treeNode) {
        currNode.right = new TreeNode(value);
        currNode = currNode.right;
    }    
    return dummyNode.right
};


let result = increasingBST(root5)
while(result){
    console.log(result.val)
    result = result.right
}