var lines;
//while(lines = readline()){
//    var n = parseInt(lines);
//    var str = readline();
    var n = 3;
    var str = "-1 2 1"

    var arr = str.split(" ");
    arr.forEach(function(item,index,array){
        array[index] = parseInt(item);
    });

    var max = parseInt(arr[0]);
    for(var i= 0; i<arr.length;i++){
        var temp = 0;
        for(var j = i; j<arr.length;j++){
            temp += parseInt(arr[j]);
            max = Math.max(max, temp);
        }
    }
    console.log(max);
//}
//print(max);


//console.log(max);




/*

var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
var countLine = 1;          //标记当前行
var tokens = [];            //保存每行读到的数据
rl.on('line', function(line){
    tokens.push(line);
    if(countLine == 2){
        var n = parseInt(tokens[0]);
        var str = tokens[1];
    
        var arr = str.split(" ");
        arr.forEach(function(item,index,array){
            array[index] = parseInt(item);
        });
    
        var max = arr[0];
        for(var i= 0; i<arr.length;i++){
            var temp = 0;
            for(var j = i; j<arr.length;j++){
                temp += arr[j];
                max = Math.max(max, temp);
            }
        }
        console.log(max);
    }else{
        countLine++;
    }
});
*/