/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    var l1 = nums1.length;
    var l2 = nums2.length;
    var mid1,mid2
    if((l1+l2)%2){
        mid1 = parseInt((l1+l2)/2)
    }else{
        mid2 = parseInt((l1+l2)/2);
        mid1 = mid2-1
    } 
    let i = 0, j = 0;
    let resultArr = []
    if(l1 == 0){
        if(mid2) return ((nums2[mid1] + nums2[mid2])/2).toFixed(5)
        return nums2[mid1].toFixed(5)
    }
    if(l2 == 0){
        if(mid2) return ((nums1[mid1] + nums1[mid2])/2).toFixed(5)
        return nums1[mid1].toFixed(5)
    }

    while(i<l1 && j <l2){
        if(nums1[i] < nums2[j]){
            resultArr.push(nums1[i++])
        }else{
            resultArr.push(nums2[j++])
        }
    }
    while(i<l1){
        resultArr.push(nums1[i++])
    }
    while(j<l2){
        resultArr.push(nums2[j++])
    }

    if(mid2){
        return ((resultArr[mid1] + resultArr[mid2])/2).toFixed(5)
    }else{
        return resultArr[mid1].toFixed(5)
    }
};

let r1 = findMedianSortedArrays([1,3],[2])
let r2 = findMedianSortedArrays([1,2],[3,4])
let r3 = findMedianSortedArrays([0,0],[0,0])
let r4 = findMedianSortedArrays([],[1])
let r5 = findMedianSortedArrays([2],[])
let r6 = findMedianSortedArrays([1,2,2,3,4,5,6,6,6],[3,4,4,4,5,6,7,8,9,10])
let r7 = findMedianSortedArrays([1,2],[3])
console.log(r1,r2,r3,r4,r5,r6,r7)


