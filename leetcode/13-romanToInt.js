/**
 * @param {string} s
 * @return {number}
 */
//"IV"  4
//"IX"   9
//"LVIII"   58
//"MCMXCIV"  1994

var romanToInt = function(s) {
    const charReflct = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    var resultVal = 0;
    ["IV", "IX", "XL", "XC", "CD", "CM"].forEach((item, index)=>{
        var i = s.indexOf(item)
        if(i >= 0) {
            resultVal += (5*(index%2) + 4) * Math.pow(10, parseInt(index/2))
            var tempArr = s.split("");
            tempArr.splice(i, 2);
            s = tempArr.join("");
        }
    })
    if(!s) return resultVal;
    var sArr = s.split("");
    sArr[0] = charReflct[sArr[0]]
    var resultVal2 = sArr.reduce((total, item)=>{
        return total + charReflct[item]
    })
    return resultVal + resultVal2
};


let val = romanToInt('');
console.log(val)