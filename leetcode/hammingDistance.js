/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let resultArr = (x^y).toString(2).split("").filter(item=>{
        return item == 1
    });
    return resultArr.length;
};

let result = hammingDistance(24234234234234231,44234234234234234);
console.log(result)