function getprime(num){
    var n = num;
    var result = [];
    while(num != 1){
        for(var i = 2;;i++){
            if(num % i == 0){
                result.push(i);
                num = num/i;
                break;
            }
        }
    }
    var resultStr = result.join("*");
    var resultArr = resultStr.split("");
    var num2char = {
        "0" : [' - ', '| |', '   ', '| |', ' - '],
        "1" : ['   ', '  |', '   ', '  |', '   '],
        "2" : [' - ', '  |', ' - ', '|  ', ' - '],
        "3" : [' - ', '  |', ' - ', '  |', ' - '],
        "4" : ['   ', '| |', ' - ', '  |', '   '],
        "5" : [' - ', '|  ', ' - ', '  |', ' - '],
        "6" : [' - ', '|  ', ' - ', '| |', ' - '],
        "7" : [' - ', '  |', '   ', '  |', '   '],
        "8" : [' - ', '| |', ' - ', '| |', ' - '],
        "9" : [' - ', '| |', ' - ', '  |', ' - '],
        '*' : [' ', ' ', '*', ' ', ' ']
    };
    var char1 = [];
    var char2 = [];
    var char3 = [];
    var char4 = [];
    var char5 = [];
    for(var i = 0; i < resultArr.length; i++){
        char1.push(num2char[resultArr[i]][0]);
        char2.push(num2char[resultArr[i]][1]);
        char3.push(num2char[resultArr[i]][2]);
        char4.push(num2char[resultArr[i]][3]);
        char5.push(num2char[resultArr[i]][4]);
    };
    print(char1.join(""));
    print(char2.join(""));
    print(char3.join(""));
    print(char4.join(""));
    print(char5.join(""));
}

var line1;
while(line1 = read_line()){
    var n = parseInt(line1);
    getprime(n);
}




