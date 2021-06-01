/**
 * 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    if(n ==0) return false;
    if(n ==1) return true;
    while (n%4 == 0){
        n = n/4;
        if(n == 1) return true;
    }
    return false;
};

//return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;