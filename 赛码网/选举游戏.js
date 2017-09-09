var n = 5;
var str = "7 6";

var arr = str.split(" ");

arr = arr.map(function(x){
    return parseInt(x);
});
var jing = arr[0];
arr.shift();
arr.sort(function(x, y){
    return y-x;
});

var count = 0;
while(jing <= arr[0]){
    jing++;
    count++;
    arr[0]--;
    arr.sort(function(x, y){
        return y-x;
    });
}
console.log(count);
