
    /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let sArr = s.split("");    //区分偶数和奇数
  let result = ""
  for(var i = 0; i<sArr.length; i++){
    let leftIndex = i;
    let rightIndex = i;
    while(leftIndex>=0 && rightIndex<sArr.length){
      if(sArr[leftIndex] == sArr[rightIndex]){
        leftIndex --;
        rightIndex ++;
      }else{
        break;
      }
    }
    var tempStr = s.slice(leftIndex+1, rightIndex)
    if(tempStr.length > result.length) result = tempStr;

    leftIndex = i;
    rightIndex = i+1;
    while(leftIndex>=0 && rightIndex<sArr.length){
      if(sArr[leftIndex] == sArr[rightIndex]){
        leftIndex --;
        rightIndex ++;
      }else{
        break;
      }
    }
    var tempStr = s.slice(leftIndex+1, rightIndex)
    if(tempStr.length > result.length) result = tempStr;

  }
  return result
};
console.log("result:" + longestPalindrome("aa"))