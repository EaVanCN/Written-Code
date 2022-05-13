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
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    const result = [];
    const serHandler = (node)=>{
        if(node){
            result.push(node.val);
            serHandler(node.left)
            serHandler(node.right)
        }else{
            result.push("Null")
        }
    }
    serHandler(root);
    return result.join(",");
};



/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split(",");
    const deserHandler = (list)=>{
        const head = list.shift()
        if(head === "Null"){
            return null;
        }else{
            var node = new TreeNode(parseInt(head));
        }
        node.left = deserHandler(list)
        node.right = deserHandler(list)
        return node;
    }
    return deserHandler(arr)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


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
 n7.right = n10;
 
 n2.left = n1;

 console.log(serialize(n5))

 var str = '5,4,3,Null,Null,2,1,Null,Null,Null,6,7,9,Null,Null,10,Null,Null,8,Null,Null'

 console.log(deserialize(str))