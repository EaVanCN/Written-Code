function getCoins(n){
    var coins = [1,5,10,20,50,100];
    var result = [];
    for(var i = 0;i<=n;i++){   
        if(0 == i){
            result.push(1);
        }else{
            result.push(0);
        }
    }
    for(var i = 0;i < coins.length; i++){ 
        for(var j = 1;j < result.length; j++){
            if(j>=coins[i]) {
                result[j] += result[j-coins[i]];
            }
        }
    }
    return result[n];
}

// var line;
// while(line = readline()){
//     var n = parseInt(line);
//     print(getCoins(n));
// }
console.log(getCoins(50));