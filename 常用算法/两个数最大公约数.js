// function getGCD(m, n){           //辗转相除法(递归使用)
//     var num1 = Math.max(m, n);
//     var num2 = Math.min(m, n);

//     if(num2 == 0) return num1;
//     return arguments.callee(n, m%n);
// }

console.log(getGCD(10, 5));



function getGCD(m, n){          //非递归的辗转相除法
    var num1 = Math.max(m, n);
    var num2 = Math.min(m, n);
    var temp;
    while(num1%num2 != 0){
        temp = num2;
        num2 = num1%num2;
        num1 = num2;
    }
    return num2;
}