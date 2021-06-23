/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let length = arr.length;
    let left = 0, right = length-1, ans = 0;
    while(left < right){
        mid = Math.floor((left+right)/2);
        if(arr[mid] > arr[mid+1]){
            right = mid;
            ans = mid
        }else{
            left = mid + 1;
        }
    }
    return ans;
};


console.log(peakIndexInMountainArray([2,1,0]))