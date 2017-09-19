var str1 = "XX.";
var str2 = ".";
var str3 = ".XX";

function judge(str1,str2,str3){
    var arr1 = str1.split("");
    if(arr1.length < 3) arr1.length = 3;
    arr1.forEach(function(item,index,array){
        if(item == "."){
            array[index] = undefined;
        }
    })
    var arr2 = str2.split("");
    if(arr2.length < 3) arr2.length = 3;
    arr2.forEach(function(item,index,array){
        if(item == "."){
            array[index] = undefined;
        }
    })
    var arr3 = str3.split("");
    if(arr3.length < 3) arr3.length = 3;
    arr3.forEach(function(item,index,array){
        if(item == "."){
            array[index] = undefined;
        }
    })
    var mima = [arr1,arr2,arr3];
    var flag = true;
    for(var i = 0;i < mima.length; i++){
        for (var j = 0; j < mima.length; j++) {
            if(mima[i][j] != mima[Math.abs(2-i)][Math.abs(2-j)]){
                flag = false;
            }     
        }
    }
    if(flag){
        return "YES";
    }else{
        return "NO";
    }
}


console.log(judge(str1,str2,str3));


