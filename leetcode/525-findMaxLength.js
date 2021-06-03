/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
 * 
 * 示例 1:
 * 输入: nums = [0,1]
 * 输出: 2
 * 说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
 * 
 * 示例 2:
 * 输入: nums = [0,1,0]
 * 输出: 2
 * 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
 * 
 */
var findMaxLength = function(nums) {
    const map = new Map();
    map.set(0, -1)
    let maxLen = 0;
    let val = 0;
    for(let i =0; i<nums.length; i++){
        val += nums[i] ? 1 : -1;
        if(map.has(val)){
           let index = map.get(val);
           maxLen = Math.max(maxLen, i-index);
        }else{
            map.set(val, i)
        }
    }
    return maxLen;
};

let result = findMaxLength([0,1])
console.log(result)