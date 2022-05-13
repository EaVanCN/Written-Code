/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
 * 
 * 输入：nums = [10,5,2,6], k = 100
 * 输出：8
 * 解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
 * 需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
 * 
 * 输入：nums = [1,2,3], k = 0
 * 输出：0
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let ans = 0;
    const len = nums.length;
    for(let i = 0; i < len; i++){
        let j = i, cur = nums[i];
        while(j < len && cur < k){
            ans++;
            cur *= nums[++j]
        }
    }
    return ans;
};

let nums = [1,2,3], k = 0;
console.log(numSubarrayProductLessThanK(nums, k))