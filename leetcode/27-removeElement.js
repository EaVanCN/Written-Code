/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//  var removeElement = function(nums, val) {
//     nums.reverse()
//     console.log(nums);
//     let result = nums.length;
//     for(var i =nums.length-1; i>=0; i--){
//         if(val == nums[i]){
//             nums.splice(i,1);
//             result--
//         }
//     }
//     console.log(JSON.stringify(nums.reverse()))
//     return result
// };

var removeElement = function(nums, val) {
    var k = 0;
    for(var i=0; i<nums.length; i++)
    {
        if(nums[i] != val)
            nums[k++] = nums[i];
    }
    return k;
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))