var str = "1 3 4 5 6 0 7";

function getLose3Num(str){
    var arr = str.split(" ");
    arr = arr.map(function(item){
        return parseInt(item);
    })
    arr.sort(function(a,b){
        return a-b;
    })
    var resultArr = [];
    for(var i = 0; i<arr.length && i < 9; i++){
        if(arr[i] + 1 != arr[i+1]){
            resultArr.push(arr[i] + 1);
            arr.splice(i+1,0,arr[i]+1);
        }
    }
    return resultArr;
}


var numStr = parseInt(getLose3Num(str).join(""));
console.log(numStr%7);
