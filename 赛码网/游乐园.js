var arr = [1,2,3,4,4,3,3,3];

line = "2 8";
function jumpGame(line,arr){
    var tempArr = line.split(" ");
    var num1 = parseInt(tempArr[0]);
    var num2 = parseInt(tempArr[1]);
    var start = num1-1;
    var end = num2-1;
    var result = 0;
    var flag = 0;
    for(var i = start+1;i<=end-1;i++){
        if(arr[i]<=arr[i+1]&&arr[i]>=arr[i-1]){
            result++;
        } 
    }
    return (result);
}
console.log(jumpGame(line,arr));


// var n = read_line();
// n = +n;
// var str = read_line();
// var arr = str.split(" ");
// arr = arr.map(function(item){
//     return parseInt(item);
// });
// var nums = read_line();
// nums = +nums;
// for(var j=0;j<nums;j++){
//     var line = read_line();
//     print(jumpGame(line,arr));
//  }












// 40
// for(var i = start;i<=end-2;i++){
//     if(arr[i]<=arr[i+1]&&arr[i+1]<=arr[i+2]){
//         result++;
//     }
// }