/**
 * 这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。
 * 请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。
 * 注意，不管是什么情况下，你都无法跳到数组之外。
 * 
 * 示例 1:
 * 输入：arr = [4,2,3,0,3,1,2], start = 5
 * 输出：true
 * 解释：
 * 到达值为 0 的下标 3 有以下可能方案： 
 * 下标 5 -> 下标 4 -> 下标 1 -> 下标 3 
 * 下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3 
 * 
 * 示例 2：
 * 输入：arr = [4,2,3,0,3,1,2], start = 0
 * 输出：true 
 * 解释：
 * 到达值为 0 的下标 3 有以下可能方案： 
 * 下标 0 -> 下标 4 -> 下标 1 -> 下标 3
 * 
 * 示例 3：
 * 输入：arr = [3,0,2,1,2], start = 2
 * 输出：false
 * 解释：无法到达值为 0 的下标 1 处。 
 * 
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(nums, start) {
    let length = nums.length;
    let arr = new Array(length).fill(false);
    let index0 = nums.indexOf(0);
    if(nums[start] == 0) return true;
    if(index0 == -1) return false;
    arr[start] = true;
    let indexArr= [start];
    while(indexArr.length > 0){
        let curFlag = false;
        [...indexArr].forEach(item=>{ 
            let curMaxJump = item + nums[item];
            let curMInJump =item - nums[item];  
            console.log(curMInJump, curMaxJump)     
            if(curMaxJump <= length - 1 && !arr[curMaxJump]){
                if(nums[curMaxJump] == 0) curFlag = true;
                indexArr.push(curMaxJump);
                arr[curMaxJump] = true;
            }
            if(curMInJump >=0 && !arr[curMInJump]){
                if(nums[curMInJump] == 0) curFlag = true;
                indexArr.push(curMInJump);
                arr[curMInJump] = true;
            }
            indexArr.shift();
        })
        if(curFlag) return true; 
    }
    return false;
};

console.log(canReach([5,11,18,16,21,3,19,0,16,4,9,20,2,13,0,2,23,8,19,22,16,19,19,25,25,15,7], 18))