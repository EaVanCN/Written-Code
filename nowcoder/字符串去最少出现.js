var str = "aaaaaaasdfafasghsffashgshjthegaerhgaaaa";

function delRepeat(str){

    var pattern = /(\w)\1*/g;
    var strSortedArr = str.split("").sort().join("").match(pattern);

    strSortedArr.sort(function(a,b){
        return a.length - b.length;
    });

    var minLen = strSortedArr[0].length;
    var delArr = [];
    while(strSortedArr.length > 0){
        if(strSortedArr[0].length > minLen) break;
        delArr.push(strSortedArr.shift());
    }

    if(strSortedArr.length > 0){
        return strSortedArr.join("");
    }else{
        return delArr.join("");
    }
}
console.log(delRepeat(str));