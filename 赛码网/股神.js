function gushen(n){
    var count = 1;
    if(n == 1){
        console.log(count);
        return;
    }else{
        var flag = 0;
        var tottleTime = 1;
        while(true){
            for(var j = flag; j >=0;j--){
                tottleTime++;
                count++;
                if(tottleTime == n){
                    print(count);
                    return;
                }
            }
            flag++;
            count--;
            tottleTime++;
            if(tottleTime == n){
                print(count);
                return;
            }
        }
    }
}
while(str1 = read_line()){  
    var n = parseInt(str1);
    gushen(n);
}