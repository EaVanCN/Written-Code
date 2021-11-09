/**
 * 
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 * 
 * 示例 1：
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 示例 2：
 * 输入：n = 1
 * 输出：["()"]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let arr = [...Array(n).fill("("),...Array(n).fill(")")];
  return parenthesis(arr).filter(item => isValid(item))
};

var isValid = function(s) {
  let stacks = []
  for(a of s){
    if(a === '('){
      stacks.push(')');
    }else if( stacks.length === 0 || a !== stacks.pop()){
        return false
    }
  }
  return stacks.length === 0
};

//这是一个全排列方法
var parenthesis = (arr)=>{
  let len = arr.length;
  let result = [];
  (function handler(temp, remaind){
    if(temp.length == len) result.push(temp.join(""));    //最后得到的结果是一个
    remaind.forEach((item, index) => {
      let cur = [...remaind];
      cur.splice(index, 1);
      handler(temp.concat(item), cur);
    });
  })([], arr)
  return [...new Set(result)];    //去重
}

// var generateParenthesis = function (n) {
//   const res = [];
//   // 用lRemain记录还可以使用多少个左括号，用rRemain记录还可以使用多少个右括号
//   const dfs = (lRemain, rRemain, str) => {
//     // 左右括号所剩的数量，str是当前构建的字符串
//     if (str.length == 2 * n) {
//       // 字符串构建完成
//       return res.push(str); // 加入解集
//     }
//     if (lRemain > 0) {
//       // 只要左括号有剩，就可以选它，然后继续做选择（递归）
//       dfs(lRemain - 1, rRemain, str + "(");
//     }
//     if (lRemain < rRemain) {
//       // 右括号比左括号剩的多，才能选右括号
//       dfs(lRemain, rRemain - 1, str + ")"); // 然后继续做选择（递归）
//     }
//   };

//   dfs(n, n, ""); // 递归的入口，剩余数量都是n，初始字符串是空串
//   return res;
// };

let val = generateParenthesis(8)
console.log(JSON.stringify(val))

// const swap = (arr, i, j)=>{
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   return [...arr];
// }

//字典全排列

// const checkSort = (arr)=>{
//   for(let i = 0; i < arr.length - 1; i++){
//     if(arr[i] > arr[i+1]) return false;
//   }
//   return true;
// }

// const permutation = (arr)=>{
//   let result = [];
//   let len = arr.length;
//   result.push([...arr]);
//   arr.sort((a, b)=>a-b);
//   while(true){
//     i = len - 2;
//     while(i >= 0){
//       if(arr[i] >= arr[i+1]){
//         i--
//       }else{
//         break;
//       }
//     }
//     if(i < 0) break;
//     let pivot = arr[i];
//     j = len - 1;
//     while(j > i){
//       if(arr[j] > pivot){
//         swap(arr, i, j);
//         result.push([...arr]);
//         let tempArr = arr.slice(i+1);
//         if(!checkSort(tempArr)){
//           tempArr.sort((a,b)=>a-b);
//           arr.splice(i+1, tempArr.length, ...tempArr);
//           result.push([...arr]);
//         }
//       }
//       j--
//     }
//   }
//   return result;
// }

// let result = permutation([1,2,3,4]);
// console.log(result);

