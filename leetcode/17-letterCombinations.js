/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    const letterArr = ['','',['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'], ['p','q','r','s'], ['t','u','v'], ['w','x','y','z']]
    if(!digits) return [];
    var digitsArr =(""+digits).split("").map(item=>parseInt(item));
    if(digitsArr.length == 1) return letterArr[digitsArr[0]]
    let result = [];
    let temp1Arr = [], temp2Arr = [];
    for(let i = 0; i<digitsArr.length-1; i++){
    	if(i == 0) temp1Arr = letterArr[digitsArr[0]]
    	temp2Arr = []
        for(let j = 0; j<letterArr[digitsArr[i+1]].length; j++){
            for(let k = 0; k<temp1Arr.length; k++){
                temp2Arr.push(temp1Arr[k] + letterArr[digitsArr[i+1]][j])
            }
            
        }
        temp1Arr = temp2Arr;
    }
    return temp1Arr;
};

let val = letterCombinations(234);
console.log(val)