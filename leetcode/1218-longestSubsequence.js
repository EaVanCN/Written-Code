/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 * 
 */
 var longestSubsequence = function(arr, difference) {
    var resultArr = [];
    var usedIndex = new Set();
    for(var i = 0; i< arr.length-1; i++){
        if(usedIndex.has(i)) continue;
        var start = arr[i];
        var curIndex = i;
        var checkArr = arr.slice(i+1);
        var checkAll = false;
        var result = 1;
        while(checkArr.legnth > 0 || !checkAll){
            var index = checkArrHandler(checkArr, difference, start)
            if(index || index === 0){
                curIndex = curIndex+1+index;
                usedIndex.add(curIndex);
                result++;
                start = checkArr[index];
                checkArr = checkArr.slice(index+1);
            }else{
                resultArr.push(result);
                checkAll = true;
            }
        }
    }
    return Math.max(...resultArr);
};

var checkArrHandler = function(arr, diff, startVal){
    for(var i = 0; i<arr.length; i++){
        if(arr[i] - startVal == diff) return i
    }
    return false;
}

var val = longestSubsequence([1,5,7,8,5,3,4,2,1], -2)
console.log(val)