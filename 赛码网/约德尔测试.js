var str1 = "@!%12dgsa";
var str2 = "010111100";

var arr1 = str1.split("");
var arr2 = str2.split("");
arr1.forEach(function(item,index,array){
    if((item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57) || (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) || (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)){
        array[index] = "1";
    }else{
        array[index] = "0";
    }
});
var count = 0;
for(var i = 0;i<arr1.length;i++){
    if(arr1[i] == arr2[i]) count++;
}
console.log(((count/arr1.length)*100).toFixed(2)+"%");


/**
var str1;
while(str1 = read_line()){
    str2 = read_line();

    var arr1 = str1.split("");
    var arr2 = str2.split("");
    arr1.forEach(function(item,index,array){
        if((item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57) || (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) || (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)){
            array[index] = "1";
        }else{
            array[index] = "0";
        }
    });
    var count = 0;
    for(var i = 0;i<arr1.length;i++){
        if(arr1[i] == arr2[i]) count++;
    }
    print(((count/arr1.length)*100).toFixed(2)+"%")

}
 */