/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let xStrArr = x.toString().split("")
    var i = 0;
    var tempArr=[];
    if(xStrArr[0] && xStrArr[0] == "-") i++
    for(i;i<xStrArr.length;i++){
        tempArr.unshift(xStrArr[i]);
    }
    for(var j = 0;j <tempArr.length; j++){
        if(tempArr[j] == "0"){
            tempArr[j] = ""
        }else{
            break;
        }
    }
    var result = (xStrArr[0] == "-"?"-":"")+tempArr.join("");
    if(result > 2147483647 || result <-2147483648){
        return 0
    }
    return result
};

console.log(reverse(1534236469))