var n = 4;
var arr1 = [3,5,2,0];
var arr2 = [0,2,4,4];

//arr1上车人员，arr2下车人员
function bus(arr1,arr2){
    var count = 0;
    var maxCount = 0;
    for (var i = 0; i < arr1.length; i++) {
        count += arr1[i];
        count -= arr2[i];
        maxCount = Math.max(maxCount,count);
    }
    return maxCount;
}
var n;
while(n = read_line()){
    var arr1 = [];
    var arr2 = [];
    var length = parseInt(n);
    for(var i = 0; i<length; i++){
        var line = read_line();
        var tempArr = line.split(" ");
        arr1.push(parseInt(tempArr[1]));
        arr2.push(parseInt(tempArr[0]));
    }
    var result = bus(arr1,arr2);
    print(result);
}



