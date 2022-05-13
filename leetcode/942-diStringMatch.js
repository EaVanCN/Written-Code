/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    const arr = s.split(""), ans = [];
    let i = 0, j = arr.length;
    for(let k = 0; k < arr.length; k++){
        if(arr[k] == 'I') ans.push(i++);
        if(arr[k] == 'D') ans.push(j--);
    }
    return [...ans, i];
};

let s = "IDID";
console.log(diStringMatch(s));