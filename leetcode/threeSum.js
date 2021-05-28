// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var threeSum = function(nums) {
//     if(nums.length < 3) return [];
//     nums.sort((a, b)=>a-b);
//     var result = [];
//     for(i = 0; i<nums.length - 2; i++){
//         if(nums[i] > 0) break;
//         if(i>0 && nums[i] == nums[i-1]) continue;
//         for(j = i+1; j<nums.length - 1; j++){
//             if(nums[i] + nums[j] > 0) break;
//             if(nums[j] == nums[j-1] && j != i+1) continue;
//             for(k = j+1; k<nums.length; k++){
//                 if(nums[i] + nums[j] + nums[k] > 0) break;
//                 if(nums[i] + nums[j] + nums[k] == 0){
//                     result.push([nums[i], nums[j], nums[k]])
//                     break;
//                 }
//             }
//         }
//     }
//     return result;
// };






var threeSum = function(nums, target) {
    if(nums.length < 3) return [];
    nums.sort((a, b)=>a-b);
    var result = [];
    for(i = 0; i<nums.length - 2; i++){
        if(nums[i] > 0) break;
        if(i>0 && nums[i] == nums[i-1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            let count = nums[i] + nums[left] + nums[right]
            if(count > 0){
                right--;
            }else if(count < 0){
                left++
            }else{
                result.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left + 1] == nums[left]){
                    left++;
                }
                while(left < right && nums[right -1] == nums[right]){
                    right--;
                }
                left++;
                right--;
            }
        }

    }
    return result;
};

console.log(threeSum([0,0,0,0,0,0]).toString())

