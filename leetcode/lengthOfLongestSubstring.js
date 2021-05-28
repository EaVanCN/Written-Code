/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var end = 0;
    var maxLength = 0;
    var sourceArr = s.split("");
    var tempArr = [];
    while(end < sourceArr.length){
        if(tempArr.indexOf(sourceArr[end]) > -1){       //窗口需要调整
            tempArr = tempArr.slice(tempArr.indexOf(sourceArr[end])+1);
            console.log(tempArr);
            tempArr.push(sourceArr[end]);
        }else{
            tempArr.push(sourceArr[end]);
            if(tempArr.length > maxLength) maxLength = tempArr.length;
        }
        end++
    }
    return maxLength;
};

var str = "abba"
var result = lengthOfLongestSubstring(str)
console.log("-----------");
console.log(result);