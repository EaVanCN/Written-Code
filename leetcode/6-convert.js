/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows == 1) return s
    var sArr = s.split("");
    var resultArr = [];
    let point = 0;
    let dir = true;         //dir正向，false反向
    for(var i= 0; i<sArr.length; i++){
        if(resultArr[point]){
            resultArr[point].push(sArr[i])
        }else{
            resultArr[point] = [sArr[i]]
        }
        if(point == numRows-1){
            point--;
            dir = false;
        }else if(point == 0){
            point++;
            dir = true;
        }else{
            dir?point++:point--
        }
    }
    var resultStr = resultArr.map(item=>{
       return item.join("");
    }).join("")
    return resultStr
};

console.log(convert("ab", 1))