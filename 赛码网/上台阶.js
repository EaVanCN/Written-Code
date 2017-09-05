var cache = [];
function upstair(i){
    if(cache[i]){
        return cache[i];
    }
    if(i == 0){
        cache[i] = 0;
        return 0;
    }
    if(i == 1){
        cache[i] = 0;
        return 0;
    }
    if(i == 2){
        cache[i] = 1;
        return 1;
    }
    if(i == 3){
        cache[i] = 2;
        return 2;
    } 
    cache[i] = arguments.callee(i-1) + arguments.callee(i-2);
    return arguments.callee(i-1) + arguments.callee(i-2);
}

//console.log(upstair(10));

var n = parseInt(read_line());
while(n > 0){
    var i = parseInt(read_line());
    print(upstair(i));
    n--;
}


//试试加上缓存