var tree = [[1, 2],[3, 4],[],[5],[],[]];

function treeMaxDepth(node){
    if (tree[node].length == 0) return 1;
    return Math.max(treeMaxDepth(tree[node][0])+1,tree[node][1] ? treeMaxDepth(tree[node][1])+1 : 0);
}
console.log(treeMaxDepth(0));

// var line;
// while(line = readline()){
//     var treeNodeNum = parseInt(line);
//     var tree = [];
//     for(var i = 0;i < treeNodeNum; i++){
//         tree.push([]);
//     }
//     var line2;
//     while(line2 = readline()){
//         var arr = line2.split(" ");
//         arr = arr.map(function(item){
//             return parseInt(item);
//         });
//         tree[arr[0]].push(arr[1]);
//     };
//     print(treeMaxDepth(0));
// }