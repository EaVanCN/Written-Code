//递归方法
var arr1 = [7];
var arr2 = [3, 8];
var arr3 = [8, 1, 0];
var arr4 = [2, 7, 4, 4];
var arr5 = [4, 5, 2, 6, 5];
var arr = [arr1, arr2, arr3, arr4, arr5];
var n = 4;
var D = [];
function maxSum(i, j){
    if(i == n)  return arr[i][j]; 
    var x = arguments.callee(i+1,j);      
    var y = arguments.callee(i+1,j+1);      
    return Math.max(x,y)+arr[i][j];    
}
console.log(maxSum(0,0))
