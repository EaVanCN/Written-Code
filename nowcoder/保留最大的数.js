var str = "1234567";
var cnt = 3;

var arr = str.split("");
arr.forEach(function(item,index,array){
    array[index] = parseInt(item);
});
while(cnt > 0){
    i = 0;
    while(arr[i] > arr[i+1]){
        i++;
    }
    arr.splice(i,1);
    cnt--;
}
var result = arr.join("");
console.log(result);
/**
var str;
while(str = readline()){
    var cnt = parseInt(readline());

    var arr = str.split("");
    arr.sort();
    
    var arrForCut = arr.splice(0,cnt);
    for(var i = 0;i<arrForCut.length;i++){
        str = str.replace(arrForCut[i],"");
    }
    print(str);
}
 */