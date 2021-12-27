/**
 * age[y] <= 0.5 * age[x] + 7   //不会向自己年龄小于一半多7岁的发送
 * age[y] > age[x]              //年龄小的不会向年龄大的发送
 * age[y] > 100 && age[x] < 100 //百岁一下的人不会向百岁以上的人发送
 * 
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    let requestCount = 0, len = ages.length;
    let handleAges = [...ages].sort((a,b)=>a-b);
    let left = 0, right = 0;
    for(let age of handleAges){
        if (age < 15) {
            continue;
        }
        while(handleAges[left] <= 0.5 * age + 7){
            left++;
        }
        while(right<len-1 && handleAges[right + 1] <= age){
            right++;
        } 
        requestCount += right-left;
    }
    return requestCount;
};

let result = numFriendRequests([16,16,16])
console.log(result);