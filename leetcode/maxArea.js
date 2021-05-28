/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let result = 0,i = 0,j = height.length-1;
    while(i <= j){
        let curVal = Math.min(height[i], height[j]) * (j-i);
        result = Math.max(curVal,result);
        if(height[i] > height[j]){
            j--
        }else{
            i++
        }
    }
    return result
};

console.log(maxArea([4,3,2,1,4]))