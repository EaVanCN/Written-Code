/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var y = x.toString().split("").reverse().join("");
    return x == y
};

console.log(isPalindrome(0))