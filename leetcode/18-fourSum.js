/***
 * 
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。

 

示例 1：

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    var result = [];
    
    var map = new Map();
    (function handler(nums, remaind){
        let curSum = nums.length ? nums.reduce((acc,val)=>acc+val, 0) : 0;
        if(!map.has(nums.toString()) && remaind.length > 0){
            map.set(nums.toString(), 1);
            remaind.forEach((item, idx)=>{
                if(nums.length == 3 && curSum+item == target){
                    if(!map.has([...nums, item].toString())){
                        result.push([...nums, item]);
                        map.set([...nums, item].toString(), 1)
                    }
                }
                if(nums.length < 3 && (item <=0 || (item >0 && curSum + item <target))){
                    handler([...nums, item], remaind.slice(idx+1))
                }
            })
        }
      
    })([], nums)
    return result;
};

// var nums = [-500,-481,-480,-469,-437,-423,-408,-403,-397,-381,-379,-377,-353,-347,-337,-327,-313,-307,-299,-278,-265,-258,-235,-227,-225,-193,-192,-177,-176,-173,-170,-164,-162,-157,-147,-118,-115,-83,-64,-46,-36,-35,-11,0,0,33,40,51,54,74,93,101,104,105,112,112,116,129,133,146,152,157,158,166,177,183,186,220,263,273,320,328,332,356,357,363,372,397,399,420,422,429,433,451,464,484,485,498,499]
// var target = 2139
var nums = [2,2,2,2,2], target = 8;
var result = fourSum(nums, target);
console.log(result, result.length);