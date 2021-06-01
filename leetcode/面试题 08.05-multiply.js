/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
 var multiply = function(A, B) {
    if(A == 0 || B == 0) return 0;
    BArr = B.toString(2).split("");
    let result = 0;
    for(let i = 0 ;i<BArr.length; i++){
        if(BArr[i] == 1) result += A << (BArr.length - i - 1)
    }
    return result
};



console.log(multiply(3,4))