/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    var result = [1, 1, 2]
    for(let i = 3; i<=n; i++){
        result[i] = (result[i-1] + result[i-2]) % 1000000007
    }
    return result[n]
};

console.log(numWays(44));
