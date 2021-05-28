/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const charReflct = {1: 'I', 5: 'V',10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
    const splitChar = {"VIIII":"IX", "IIII":"IV", "LXXXX":"XC", "XXXX":"XL", "DCCCC":"CM", "CCCC":"CD"}
    var result = ""
    let arr = [1000, 100, 10, 1]
    arr.forEach(item => {
        var intPart = parseInt(num/item);
        if(intPart > 0) intPart >= 5 ? (result += charReflct[5*item] + charReflct[item].repeat(intPart-5)) : (result += charReflct[item].repeat(intPart));
        num = num % item
    });
    Object.keys(splitChar).forEach(char=>{
        if(result.indexOf(char) > -1){         
            result = result.replace(char, splitChar[char])
        }
    })
    return result;
};
let val = intToRoman(40);
console.log(val)