/**
 * @param {string} s
 * @return {string}
 */
//  "(u(love)i)"
//  " i love u "

//  "((u(love)i)a)"
//  "  a u evol i "

// var reverseParentheses = function(s) {
//     let resultLeft = [];
//     let resultRight = [];
//     reverseRes(s, resultLeft, resultRight)
    
//     let result = resultLeft.concat(resultRight)
//     return result.join("")
// };

// var reverseRes = function(s,resultLeft,resultRight){
//     if(s.length == 0) return ""
//     var sArr = s.split("");
//     let leftIndex =Math.min(s.indexOf("("), s.indexOf(")"));
//     let rightIndex =Math.max(s.lastIndexOf("("), s.lastIndexOf(")"));
//     if(leftIndex < 0){
//         for(let i = 0; i<sArr.length; i++){
//             resultLeft.push(sArr[i]);
//         }
//         return s;
//     } 
//     for(let i = 0; i<leftIndex; i++){
//         resultLeft.push(sArr[i]);
//     }
//     for(let i = sArr.length - 1; i > rightIndex; i--){
//         resultRight.unshift(sArr[i]);
//     }
//     var resultArr = sArr.slice(leftIndex+1, rightIndex)
//     resultArr.reverse();
//     console.log(resultLeft, resultRight)
//     return reverseRes(resultArr.join(""), resultLeft, resultRight)
// }




let resultVal = reverseParentheses("ta()usw((((a))))")
console.log(resultVal)
// a p mno q lkjihgfedcb
// a p mno lkjihgfedcb q


//(u(love)i)

var reverseParentheses = function(s) {
    const stk = [];
    let str = '';
    for (const ch of s) {
        if (ch === '(') {
            stk.push(str);
            str = '';
        } else if (ch === ')') {
            str = str.split("").reverse().join("");
            str = stk[stk.length - 1] + str;
            stk.pop();
        } else {
            str += ch;
        }
    }
    return str;
};
