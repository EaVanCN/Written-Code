/**
 * 
 * 
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
 * 
 * 示例 1：
 * 输入：columnNumber = 1
 * 输出："A"
 * 
 * 示例 2：
 * 输入：columnNumber = 28
 * 输出："AB"
 * 
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const sb = [];
    while (columnNumber !== 0) {
        columnNumber--;
        sb.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return sb.reverse().join('');
};

console.log(convertToTitle(27))

