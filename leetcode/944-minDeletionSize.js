/**
 * 输入：strs = ["cba","daf","ghi"]
 * 输出：1
 * 
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
    const len = strs[0].length;
    let ans = 0;
    for(let i = 0; i < len; i++){
        let result = strs.every((item, j)=>{
            return !(j > 0 && item[i] < strs[j-1][i])
        })
        if(!result) ans++;
    }
    return ans
};
const strs = ["zyx","wvu","tsr"]
console.log(minDeletionSize(strs))