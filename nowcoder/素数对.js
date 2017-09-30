function isPrime(n){                        //判断一个数是不是质数；
    for(var i=2;i<=Math.sqrt(n);i++){  
        if(n % i == 0){  
            return false;  
        }  
    }  
    return true;  
}

function getPrimeCount(n){
    var len = Math.floor(n/2),
        count = 0;
    for(var i = 2;i<=len;i++){
        var j = n-i;
        if(isPrime(i) && isPrime(j)){
            count ++;
        }
    }
    return count;
}
console.log(getPrimeCount(10));