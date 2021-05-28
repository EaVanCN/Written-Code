/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    s = s.trim();
    let arr = s.split("");
    let isPlus = true;
    let resultArr = [];
    for(let i = 0; i<arr.length; i++){
        if(i == 0){
            if(arr[i] == "-"){
                isPlus = false;
            }else if(arr[i] == "+"){
                isPlus = true;
            }else if(/\d/.test(arr[i])){
                resultArr.push(arr[i])
            }else{
                return 0;
            }
        }else{
            if(/\d/.test(arr[i])){
                resultArr.push(arr[i])
            }else{
                break;
            }
        }
    }
    if(resultArr.length == 0) return 0;
    var resultVal = (isPlus?"":"-") + resultArr.join("")
    if(-2147483648 - resultVal > 0){
        return -2147483648
    }else if(resultVal - 2147483647 > 0){
        return 2147483647
    }else{
        return parseInt((isPlus?"":"-") + resultArr.join(""))
    }
};

var val = myAtoi("2147483648")
//console.log(val)