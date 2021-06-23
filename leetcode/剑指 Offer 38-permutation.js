/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let sArr = s.split("");
    if(sArr.length == 0) return [""]
    if(sArr.length == 1) return [s]
    let baseArr = [sArr[0]];
    for(let i = 1; i< sArr.length; i++){
        baseArr = insertIntoArr(baseArr,sArr[i]);
    }
    return Array.from(new Set([...baseArr]));
};


var insertIntoArr = function(arr, s){    //将s插入arr里元素的每一个位置
    let result = [];
    for(let i = 0; i<arr.length; i++){
        let curArr = arr[i].split("");
        for(let j = 0; j<curArr.length; j++){
            let temp = [...curArr];
            temp.splice(j, 0, s);
            let val =temp.join("");
            result.push(val)
        }
        curArr.push(s);
        result.push(curArr.join(""))
    }
    return result
}

console.log(permutation('abcc'))