/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let i = 0;
    while(i < nums.length){
        if(nums[i] == nums[i+1]){
            nums.splice(i,1);
        }else{
            i++
        }
    }
    return nums.length;
};

var nums = [1,1,2]
var result = removeDuplicates(nums)
console.log(nums, result);