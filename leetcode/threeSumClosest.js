
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
    nums.sort((a, b)=>a-b);
    var resultFlag = Infinity;
    var result = nums[0] + nums[1] + nums[2];
    for(i = 0; i<nums.length - 2; i++){
        if(i>0 && nums[i] == nums[i-1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            let count = nums[i] + nums[left] + nums[right]
            console.log(count)
            if(Math.abs(count - target) < resultFlag){
                resultFlag = Math.abs(count - target)
                result = count
            }
            if(count - target > 0){
                right--;
            }else if(count - target < 0){
                left++
            }else{
                return target
            }
        }

    }
    return result;
};

console.log(threeSumClosest([1,1,1,0],-100))