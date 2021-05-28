var twoSum = function(nums, target) {
    var result = [];
    nums.forEach((element, index, arr) => {
        var targetIndex = arr.indexOf(target-element)
        if(targetIndex > -1 && targetIndex != index){
            result[0] = index;
            result[1] = targetIndex;
            return false;
        }
    });
    return result;
};

//console.log(twoSum([2, 7, 11, 15],119))