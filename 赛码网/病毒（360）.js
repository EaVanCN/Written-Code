var str = "312410141";

function getRightNums(str){
    var n = +str;
    var m = 1;
    while(m.toString(2) <= n){
        m++;
    }
    return m-1;
}
console.log(getRightNums(str));