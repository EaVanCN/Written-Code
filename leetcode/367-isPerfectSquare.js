/**
 *  给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

 * 进阶：不要 使用任何内置的库函数，如  sqrt 。
 * 
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    let num2 = Math.sqrt(num);
    return !(num2%1)
};

console.log(isPerfectSquare(14))