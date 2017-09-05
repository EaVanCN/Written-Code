/*var line;
while(line = readline()){
  	var arr = line.split(' ');
    arr.forEach(function(item,index,array){
        array[index] = parseInt(item);
    })
    
*/
    var arr = [300,380];
    var n = arr[0];
    var m = arr[1];
    var num = 0;
    var targetList = [];
    for(var i = n;i <= m;i++){
        var numStr = ""+i;
        var numArr = numStr.split("");
        numArr.forEach(function(item,index,array){
            array[index] = parseInt(item);
        })
        if((Math.pow(numArr[0],3) + Math.pow(numArr[1],3) + Math.pow(numArr[2],3)) == i){
            num++
            targetList.push(i);
        }
    }

    if(num == 0){
        var result = "no";
    }else{
        var result = targetList.join(" ");
    }
    console.log(result);
/** 
    print(result);
 */