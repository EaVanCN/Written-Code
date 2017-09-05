var line1 = "4";
var line2 = "1 2 4 3"
var numCount = parseInt(line1);
var arr = line2.split(" ");
arr.forEach(function(item,index,array){
    array[index] = parseInt(item);
});
var haveUN = 0;
var tempArr = [];
var tempMin,tempMax;
var flag = 0;
for(var i = 0 ; i < numCount-1 ; i++){
    if(arr[i+1] < arr[i]){
        if(tempArr.length == 0) {
            tempMin = arr[i-1];
            haveUN++;
        }
        tempArr.push(arr[i]);
    };
    if(arr[i+1] > arr[i] && tempArr.length > 0){
        tempMax = arr[i+1];
        tempArr.reverse();
        if((tempMin && tempMax && tempArr[0] > tempMin && tempArr[tempArr.length-1] < tempMax) || (!tempMin && tempMax && tempArr[tempArr.length-1] < tempMax) || (tempMin && !tempMax && tempArr[0] > tempMin)){
            flag++;
        }
        tempArr = [];
    }
}
if((haveUN == 1 && flag == 1) || (haveUN == 0 && flag == 0)){
    console.log("yes");
}else{
    console.log("no");
}


/*
var line1;
while(line1 = read_line()){
    var line2;
    var arr = [];
    while(line2 = read_line()){
        var tempLine = line2.split(" ");
        arr = arr.concat(tempLine);
    }
    var numCount = parseInt(line1);
    arr.forEach(function(item,index,array){
        array[index] = parseInt(item);
    });
    var haveUN = 0;
    var tempArr = [];
    var tempMin,tempMax;
    var flag = 0;
    for(var i = 0 ; i < numCount-1 ; i++){
        if(arr[i+1] < arr[i]){
            if(tempArr.length == 0) {
                tempMin = arr[i-1];
                haveUN++;
            }
            tempArr.push(arr[i]);
        };
        if(arr[i+1] > arr[i] && tempArr.length > 0){
            tempMax = arr[i+1];
            tempArr.reverse();
            if((tempMin && tempMax && tempArr[0] > tempMin && tempArr[tempArr.length-1] < tempMax) || (!tempMin && tempMax && tempArr[tempArr.length-1] < tempMax) || (tempMin && !tempMax && tempArr[0] > tempMin)){
                flag++;
            }
            tempArr = [];
        }
    }
    if((haveUN == 1 && flag == 1) || (haveUN == 0 && flag == 0)){
        print("yes")

    }else{
         print("no")

    }
}



*/





