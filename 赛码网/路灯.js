var str = "15 5 3 7 9 14 0";
var l = 15;

var arr = str.split(" ");
arr.forEach(function(item,index,array){
    array[index] = parseInt(item);
})




function maxD(arr,l){
    arr.sort(function(a,b){return a-b;});
    var max = arr[0];
    for(var i = 0;i<arr.length-1;i++){
        var a = arr[i+1]-arr[i];
        max = Math.max(a,max);
    }
    var firstD = arr[0];
    var lastD = l-arr[arr.length-1];
    max = Math.max(firstD,lastD,max);
    return (max/2).toFixed(2);
}
console.log(maxD(arr,l));



// function maxD(arr,l){
//     arr.sort(function(a,b){return a-b;});
//     var max = arr[0];
//     for(var i = 0;i<arr.length-1;i++){
//         var a = arr[i+1]-arr[i];
//         max = Math.max(a,max);
//     }
//     var firstD = arr[0];
//     var lastD = l-arr[arr.length-1];
//     max = Math.max((firstD*2),(lastD*2),max);
//     return (max/2).toFixed(2);
// }
// var line1 = read_line();
// var l = parseInt(line1.split(" ")[1]);
// var str = "";
// var arr = [];
// while(line=read_line()){
//     str+=line;
// 	arr = str.trim().split(' ');
// }
// arr.forEach(function(item,index,array){
//     array[index] = parseInt(item);
// })
// print(maxD(arr,l));