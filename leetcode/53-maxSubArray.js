/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var res = nums[0];
    var sum = 0;
    for(var i in nums){
        if(sum > 0){
            sum += nums[i]
        }else{
            sum = nums[i]
        }
        res = Math.max(sum, res)
    }
    return res
};
console.log(maxSubArray([-1]))