function f(str){
    var arr = str.split("");
    var sum = arr.reduce(function(prev,cur){
        return parseInt(prev) + parseInt(cur);
    })
    return sum;
}
function g(str){
    num = parseInt(str);
    var str2 = num.toString(2);
    var arr = str2.split("");
    var sum = arr.reduce(function(prev,cur){
        return parseInt(prev) + parseInt(cur);
    })
    return sum;
}
function getLuckyNumLength(n){
    var length = parseInt(n);
    var arr = [];
    for(var i = 0;i<n;i++){
        arr.push(""+(i+1));
    }
    var resultArr = arr.filter(function(item){
        if(g(item) == f(item)){
            return true;
        }else{
            return false;
        }
    })
    return resultArr.length;
}
console.log(getLuckyNumLength("21"));