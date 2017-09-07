var n = 39;
var str = "3 6 6 6 3 8 9 8 5 2 9 7 3 6 5 4 2 3 6 9 9 8 6 4 1 0 4 4 8 9 3 6 0 7 8 1 1 8 4"
var step = str.split(" ");
step.forEach(function(item,index,array){
    array[index] = parseInt(item);
})

// var n = parseInt(readLine());
// var str = readLine();
// var step = str.split(" ");
// step.forEach(function(item,index,array){
//     array[index] = parseInt(item);
// })


var minStep = [];
for(var i = 0;i <= step.length; i++){
    minStep.push(10001);
}
minStep[0] = 0;
for(var i = 0; i<= minStep.length; i++){
    for(var j = i-1;j >= 0; j--){
        if (step[j] === 0) continue;
        if(j+step[j] == i){
            minStep[i] = Math.min(minStep[i], minStep[j]+1);
        }
    }
}

console.log(step.join());
console.log(minStep.join());

// var i, j;
// var dp = [];
// dp[0] = 0;
// for (i = 1; i <= n; i++) {
//     dp[i] = 10001;
// }
  
// for (i = 0; i <= n ; i++) {
//     for (j = i-1; j >=0 ; j--) {
//         if (arr[j] === 0) continue;
//         if (j + arr[j] >= i) {
//             dp[i] = Math.min(dp[i], dp[j]+1);
//         }
//     }
// }
  
// if (dp[n] === 10001) console.log(-1);
// else console.log(dp[n]);