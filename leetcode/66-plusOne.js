/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let reverseArr = digits.reverse();
    reverseArr[0] = reverseArr[0]+1;
    for(let i = 0; i< reverseArr.length; i++){
        if(reverseArr[i] == 10){
            reverseArr[i] = 0;
            reverseArr[i + 1] = reverseArr[i + 1] ? reverseArr[i + 1]+1 : 1;
        }else{
            break;
        }
    }
    return reverseArr.reverse()
};

console.log(plusOne([9,9]))
