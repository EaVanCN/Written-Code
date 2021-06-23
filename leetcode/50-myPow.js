/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//递归求法
// var myPow = function(x, n) {
//     return  n >= 0 ? myPowHandler(x, n) : 1.0 / myPowHandler(x, -n);
// };

// var myPowHandler = function(x, n){
//     if(n == 0) return 1;
//     let curVal = myPowHandler(x, parseInt(n/2))
//     return (n%2 ?  curVal * curVal * x : curVal * curVal) 
// }



//不知道问题出在哪的一种递归求法
// var myPow = function(x, n) {
//     if(x == 0) return 0;
//     if(n == 0) return 1;
//     return myPowHandler(x, n);
// };

// var myPowHandler = function(x, n){
//     if(n == 1) return x;
//     if(n == -1) return 1/x;
//     let curVal = Math.pow(myPowHandler(x, parseInt(n/2)), 2)
//     return (n%2 ?  curVal * x : curVal) 
// }


//迭代求法
var myPow = function(x, n) {
    if(x == 0) return 0;
    if(n == 0) return 1;
    var flag = true;
    if(n<0) {
        flag = false;
        n = -n;
    }
    let result = 1;
    let ohterArr = n.toString(2).split("").reverse();
    for(let i = 0; i<ohterArr.length; i++){   
        if(ohterArr[i] == 1){
            result = result * Math.pow(x,Math.pow(2,i))
        } 
    }
    return  flag ? result : 1.0 / result
};



console.log(myPow(1.00001,123456))
