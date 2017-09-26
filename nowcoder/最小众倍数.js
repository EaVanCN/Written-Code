function getLCM(a, b, c){
    var min = Math.min(a, b, c);
    var temp = [];
    if(min == 1){
        if(a == 1){
            min = Math.min(c, b);
            for(var i=2;i<=min;i++){  
                if(b%i == 0 && c%i == 0){  
                    temp.push(i);
                    b /= i;  
                    c /= i; 
                    i--;       
                }  
            }
        }
        if(b == 1){
            min = Math.min(a, c);
            for(var i=2;i<=min;i++){  
                if(a%i == 0 && c%i == 0){  
                    temp.push(i);
                    a /= i;  
                    c /= i; 
                    i--;       
                }  
            }
        }
        if(c == 1){
            for(var i=2;i<=min;i++){  
                min = Math.min(a, b);
                if(a%i == 0 && b%i == 0){  
                    temp.push(i);
                    a /= i;  
                    b /= i; 
                    i--;       
                }  
            }
        }
    }else{
        for(var i=2;i<=min;i++){  
            if(a%i == 0 && b%i == 0 && c%i == 0){  
                temp.push(i);
                a /= i;  
                b /= i; 
                c /= i; 
                i--;       
            }  
        }
    }
    
    if(temp.length > 1){
        var result = temp.reduce(function(prev,cur){
            return prev*cur;
        });
    }else{
        var result = temp[0];
    }
    if(temp.length == 0){
        var result = 1;
    }
    var aa = result*a*b*c
    return aa;
}

function get5LCM(arr){
    var result = arr.reduce(function(prev,cur){
        return prev*cur;
    });
    for(i = 0;i<3;i++){
        for(j = i+1;j<4;j++){
            for(k = j+1;k<5;k++){
                result = Math.min(result,getLCM(arr[i],arr[j],arr[k]));
            }
        }
    }
    return result;
}


console.log(get5LCM([1,2,3,4,5]));