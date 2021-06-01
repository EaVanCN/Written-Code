/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let strsArr = strs.map(item=>{
        return item.split("")
    })
    if(strs.legnth == 0) return "";
    let result = ""
    for(let i = 0; i < strsArr[0].length; i++){
        let flag = true;
        let curStr = strsArr[0][i];
        for(let j = 0; j<strsArr.length; j++){
            if(strsArr[j][i] != curStr){
                flag = false;
                break;
            }
        }
        if(flag){
            result += curStr
        }else{
            break;
        }
    }
    return result;

};


longestCommonPrefix(["dog","racecar","car"])