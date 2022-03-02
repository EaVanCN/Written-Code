/**
 * 给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 ：
 *nums[a] + nums[b] + nums[c] == nums[d] ，且
 *a < b < c < d
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
    const len = nums.length;
    let ans = 0;
    for(let i = 0; i<len-3; i++){
        for(let j = i+1; j < len-2; j++){
            for(let k = j+1; k < len-1; k++){
                for(let l = k+1; l < len; l++){
                    if(nums[i] + nums[j] + nums[k] == nums[l]) ans++
                }
            }
        }
    }
    return ans;
};

let param = [1,1,1,3,5]
let result = countQuadruplets(param);
console.log(result);