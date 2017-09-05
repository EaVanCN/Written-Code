//好多鱼
//var line;

/*while(line = readline()){
  	a.push(line);
}
*/

/* 
for(var i = 0;i < 3; i++){
    line = readline();
    a.push(line);
}*/

/*
    var a = [],b = [],c = [];
    a = ['1 36','1','3'];
    b = a[0].split(' ');
    b.forEach(function(item,index,array){
        array[index] = parseInt(item);
    })
    c = a[2].split(' ');
    c.forEach(function(item,index,array){
        array[index] = parseInt(item);
    })
    var minSize = b[0],maxSize = b[1];
    var n = parseInt(a[1]);
    var fishSize = c;


    var newFishSize = {};
    for (var i = minSize; i <= maxSize; i++) {
        newFishSize[i] = parseInt(i);
    }
    for (var i = 0; i < n; i++) {
        for(var key in newFishSize){
            if(!((newFishSize[key] > fishSize[i]/2 && newFishSize[key] < fishSize[i]*2)||(newFishSize[key] > fishSize[i] * 10)||(newFishSize[key] < fishSize[i]/10))){
                delete newFishSize[key];
            }
        }
    }
    var result = 0;
    console.log(newFishSize);
    for(var key in newFishSize){
        result++;
    }
    console.log(result);
*/


   // print(result);
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
    if(countLine == 3){
        var b=[],c=[];
        b = tokens[0].split(' ');
        b.forEach(function(item,index,array){
            array[index] = parseInt(item);
        })
        c = tokens[2].split(' ');
        c.forEach(function(item,index,array){
            array[index] = parseInt(item);
        })
        var minSize = b[0],maxSize = b[1];

        var n = parseInt(tokens[1]);

        var fishSize = c;
    
        var newFishSize = {};
        for (var i = minSize; i <= maxSize; i++) {
        newFishSize[i] = parseInt(i);
        }
        for (var i = 0; i < n; i++) {
            for(var key in newFishSize){
                if(!((newFishSize[key] > fishSize[i]/2 && newFishSize[key] < fishSize[i]*2)||(newFishSize[key] > fishSize[i] * 10)||(newFishSize[key] < fishSize[i]/10))){
                    delete newFishSize[key];
                }
            }
        }
        var result = 0;
        for(var key in newFishSize){
            result++;
        }
        console.log(result);     
    }else{
        countLine++;
    }
});

*/
var line1;
while(line1 = readline()){
    var line2 = readline();
    var line3 = readline();
    b = line1.split(' ');
    b.forEach(function(item,index,array){
        array[index] = parseInt(item);
    })
    var n = parseInt(line2);
    c = line3.split(' ');
    c.forEach(function(item,index,array){
        array[index] = parseInt(item);
    })
    var minSize = b[0],maxSize = b[1];
    var fishSize = c;


    var newFishSize = {};
    for (var i = minSize; i <= maxSize; i++) {
        newFishSize[i] = parseInt(i);
    }
    for (var i = 0; i < n; i++) {
        for(var key in newFishSize){
            if(!((newFishSize[key] > fishSize[i]/2 && newFishSize[key] < fishSize[i]*2)||(newFishSize[key] > fishSize[i] * 10)||(newFishSize[key] < fishSize[i]/10))){
                delete newFishSize[key];
            }
        }
    }
    var result = 0;
    for(var key in newFishSize){
        result++;
    }
    print(result);
}















