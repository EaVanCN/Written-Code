var str = "Have you ever gone shopping and";

function getChar(str){
    str = str.replace(/\s/g,"");
    var resultObj = {};
    var arr = str.split("");
    for(var i = 0; i<arr.length;i++){
        var ascii = arr[i].charCodeAt();
        if(!((ascii >=65 && ascii <=90) || (ascii >=97 && ascii <=122) || (ascii >=48 && ascii <=57))){
            continue;
        }
        if(resultObj[arr[i]]){
            resultObj[arr[i]] ++;
        }else{
            resultObj[arr[i]] = 1;
        }
        if(resultObj[arr[i]] == 3){
            return arr[i];
        }
    }
    return -1;
}
console.log(getChar(str));



// var line;
// while(line = readline()){
//     print(getChar(line));
// }