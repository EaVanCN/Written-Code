//最小公倍数为两个数的乘积除以两个数的最大公约数

function getLCM(m,n){
    
    return (m*n)/getGCD(m,n);
}

function getGCD(m, n){           //辗转相除法(递归使用)
    var num1 = Math.max(m, n);
    var num2 = Math.min(m, n);

    if(num2 == 0) return num1;
    return arguments.callee(n, m%n);
}

console.log(getLCM(10,3));