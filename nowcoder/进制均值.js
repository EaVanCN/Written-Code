var line = "10";


function getAvg(line){  
    var num = parseInt(line);
    var AllNumsArr = [];
    for(var i = 2; i<num; i++){
        var curNum = num;
        var resultArr = [];
        while(curNum != 0){
            var tempCur = curNum;
            curNum = parseInt(curNum/i);
            resultArr.push(tempCur%i);
        }
        resultArr.reverse();
        AllNumsArr = AllNumsArr.concat(resultArr);
    }
    var sum = AllNumsArr.reduce(function(prev,cur){
            return prev + cur;
    })
    var fenzi = sum;
    var fenmu = num - 2;
    var min = Math.min(fenzi,fenmu);
    for (var i = min; i > 1; i--) {
        if(fenzi % i == 0 && fenmu % i == 0){
            fenzi = fenzi/i;
            fenmu = fenmu/i;
            i++;
        }
    }
    return fenzi + "/" + fenmu;

}
// var line;
// while(line = readline()){
//     print(getAvg(line));
// }
console.log(getAvg(line));