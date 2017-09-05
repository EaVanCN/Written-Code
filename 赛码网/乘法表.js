// function chengfabiao(str){
//     var arr = str.split(" ");
//     var n = parseInt(arr[0]);
//     var m = parseInt(arr[1]);
//     var k = parseInt(arr[2]);
//     var result = [];
//     for(var i = 1;i<=n;i++){
//         for(var j = 1;j<=m;j++){
//             result.push(i * j);
//         }
//     }
//     result.sort(function(a, b){return a-b;});

//     return result[k-1];
// }
//console.log(chengfabiao("500000 500000 1"));



function chengfabiao(str){
    var arr = str.split(" ");
    var n = parseInt(arr[0]);
    var m = parseInt(arr[1]);
    var k = parseInt(arr[2]);

    var left = 1,
        right = n*m,
        mid,result;
    while(left <= right){
        mid =  Math.floor((left + right)/2);
        var sum = cal(n,m,mid);
        if(k > sum){
            left = mid + 1;
        }else{
            right = mid - 1; 
        }
    }
    return left;
}
function cal(n,m,mid){
    var sum = 0;
    for(var i = 1; i <= n; i++){
        sum += (mid >= (m*i)) ? m : Math.floor(mid/i);
    }
    return sum;
}

console.log(chengfabiao("2 3 4"));


// var line;
// while(line = read_line()){
//     print(chengfabiao(line));
// }







