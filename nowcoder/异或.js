var str1 = "3 10";
var str2 = "6 5 10";

function yihuo(str1,str2){
    var m = parseInt(str1.split(" ")[1]);
    var arr = str2.split(" ");
    arr.map(function(item){return parseInt(item)});
    var count = 0;
    for(var i = 0;i < arr.length-1; i++){
        for(var j = i+1;j<arr.length;j++){
            if((arr[i]^arr[j]) > m){
                var a = arr[i]^arr[j];
                count ++;
            }
        }
    }
    return count;
}
console.log(yihuo(str1,str2));