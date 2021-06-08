/**
 * 
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 示例 2：
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let length = nums.length;
    let expTimes = 1;
    let result = [[nums[0]]]
    while(expTimes < length){
        [...result].forEach(item=>{
            result.shift();
            for(let i=0;i < item.length; i++){
                let temp = [...item];
                temp.splice(i, 0, nums[expTimes]);
                result.push(temp)
            }
            let temp = [...item];
            temp.push(nums[expTimes])
          	result.push(temp)
        })
        expTimes++
    }
    return result;
};

