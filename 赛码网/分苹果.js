function getApples(n){
    if(n == 1) {
        print(3);
        return;
    }
    var result,
        index = 1,
        flag = 0;
    while(index > 0){
        var temp = index*n+1;
        if(temp%(n-1) == 0){
            for(var i = 1; i < n; i++){
                temp = cal(temp,n);
                if(i == (n-1)){
                    flag = 1;
                    print(temp);
                }else if(temp%(n-1) != 0){
                    break;
                }
            }
            if(flag){
                break;
            }
        }
        index++;
    }
}

function cal(x,n){
    return (x/(n-1)) * n + 1;
}
var line;
while(line = read_line()){
    var n = parseInt(line);
    getApples(n);

}
