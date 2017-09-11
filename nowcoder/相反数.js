var line = "1325";

function getReNum(line){
    var arr = line.split("").reverse();
    while (arr.length > 0){
        if(arr[0] == "0"){
            arr.shift();
        }else{
            break;
        }
    };
    var reNum = parseInt(arr.join(""));
    var oldNum = parseInt(line);

    return reNum + oldNum;
}

console.log(getReNum(line));