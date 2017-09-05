while(lines = readline()){
    arr = lines.split(" ");
    arr.forEach(function(item,index,array){
        array[index] = parseInt(item);
    });
    var n = arr[0];
    var m = arr[1];
    var result = 0;
    for(var i = 0;i < m; i++){
        result += n;
        n = Math.sqrt(n);
    }
    result = result.toFixed(2);

}
