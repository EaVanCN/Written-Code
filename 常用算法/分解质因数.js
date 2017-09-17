function isPrime(n){                        //判断一个数是不是质数；然而在我的算法里面并没有用到
    for(var i=2;i<=Math.sqrt(n);i++){  
        if(n % i == 0){  
            return false;  
        }  
    }  
    return true;  
}  

function PrimeFactorizer(n){  
    //用来存储结果的hash  
    var hash = {};  
 
        //从最小的质数开始除  
        for(var i=2;i<=n;i++){  
            if(n % i == 0){  
                //如果hash中有这个质数，则存储的数目+1  
                if(hash[i]){  
                    hash[i] = hash[i] + 1;  
                }//否则把该质数作为key，value为1  
                else{  
                    hash[i] = 1;  
                }  
                //除掉这个最小的质数因子  
                n /= i--;  
            }  
        }  
 
    //给实例上加个factor属性  
    this.factor = hash;  
    hash = null;  
}  
var t1 = new Date().getTime();
console.log(new PrimeFactorizer(24123451236).factor) // { '2': 3, '3': 1 }  var t1 = new Date().getTime();
var t2 = new Date().getTime();
console.log("耗时：" + (t2-t1));