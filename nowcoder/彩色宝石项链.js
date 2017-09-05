var str = "ABCYDYE";
arr = str.split("");
var maxJewel = 0;
arr.forEach(function(item,index,array) {
    array[index] = item.charCodeAt()-65;
});
console.log(arr.join());
for (var i = 0; i < arr.length; i++) {
    var count = arr.length;
    var curJewels = 0;
    var JewelArr = [];
    var tempIndex = i;
    while(count > 0){
        if(tempIndex == arr.length){tempIndex = 0;}
        if(arr[tempIndex] < 5 && JewelArr.indexOf(arr[tempIndex]) < 0){
            JewelArr.push(arr[tempIndex]);
        }  
        curJewels++;
        if(JewelArr.length == 5){
            break;
        }
        tempIndex++;
        count--;
    }
    curJewels = arr.length - curJewels;
    maxJewel = Math.max(maxJewel,curJewels);
   
}
console.log(maxJewel);

/*
var str;
while(str = readline()){
    arr = str.split("");
    var maxJewel = 0;
    arr.forEach(function(item,index,array) {
        array[index] = item.charCodeAt()-65;
    });
    console.log(arr.join());
    for (var i = 0; i < arr.length; i++) {
        var count = arr.length;
        var curJewels = 0;
        var JewelArr = [];
        var tempIndex = i;
        while(count > 0){
            if(tempIndex == arr.length){tempIndex = 0;}
            if(arr[tempIndex] < 5 && JewelArr.indexOf(arr[tempIndex]) < 0){
                JewelArr.push(arr[tempIndex]);
            }  
            curJewels++;
            if(JewelArr.length == 5){
                break;
            }
            tempIndex++;
            count--;
        }
        curJewels = arr.length - curJewels;
        maxJewel = Math.max(maxJewel,curJewels);
       
    }
    print(maxJewel);
}
*/