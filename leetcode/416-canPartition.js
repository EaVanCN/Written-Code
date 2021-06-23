/**
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 示例 1：
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 * 
 * 示例 2：
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组不能分割成两个元素和相等的子集。
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums){				//错误的
    let length = nums.length;
    let sub = [nums[0]]
    for(let i =1;i<length;i++){
    	sub[i] = sub[i-1]+nums[i]
    }
    let dp = new Array(length+1);
    dp[0] = [...sub]
    dp[0].unshift(0)
    for(let n = 0; n < length; n++){
		dp[n+1] = [-sub[n]]
	}
    for(let i = 1; i<length+1; i++){
        for(let j = 1; j<length+1; j++){
            dp[i][j] = (dp[i-1][j] + nums[i-1]) - (dp[i][j-1] + nums[j-1]);
        }
    }
    console.log(dp);
    for(let m = 0; m<length; m++){
        if(dp[m][length-m] == 0) return true;
    }
    return false;
};

console.log(canPartition([1,5,11,5]))