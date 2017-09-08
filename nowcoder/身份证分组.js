var line1 = "5021";
var line2 = "502104 198803";
var line3 = "5021041988033084";
var line4 = "502104198803308324";


function spliceStr(str){
    var result;
    str = str.replace(/\s/ig,'');
    var arr = str.split("");
    if(arr.length < 7){
        result = arr.join("");
    }else if(arr.length < 15){
        arr.splice(6,0," ");
        result = arr.join("");
    }else{
        arr.splice(6,0," ");
        arr.splice(15,0," ");
        result = arr.join("");
    }
    return result;
}

// var line;
// while(line = readline()){
//     print(spliceStr(line));
// }


console.log(spliceStr(line1));
console.log(spliceStr(line2));
console.log(spliceStr(line3));
console.log(spliceStr(line4));



