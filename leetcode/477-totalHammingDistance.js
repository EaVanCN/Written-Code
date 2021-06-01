/**
 * @param {number[]} nums
 * @return {number}
 */
 var totalHammingDistance = function(nums) {
    let result = []
    if(nums.length <=1) return 0;
    for(let i = 0; i< nums.length-1; i++){
        for(let j = i+1; j<nums.length; j++){
            result.push(hammingDistance(nums[i],nums[j]))
        }
    }
    return result.reduce((total,cur)=>{
        return total + cur
    })
};

var hammingDistance = function(x, y) {
    let resultArr = (x^y).toString(2).split("").filter(item=>{
        return item == 1
    });
    return resultArr.length;
};

let val = totalHammingDistance([1337]);
console.log(val)