var str1 = "1 3 5 43 23 23 564 56";
var str2 = "2 4 6 7 8 6 2 4";

function strConcat(str1,str2){
    var arr1 = str1.split(" ");
    var arr2 = str2.split(" ");
    arr1 = arr1.concat(arr2);
    arr1.sort(function(a, b){
        return parseInt(a) - parseInt(b);
    });
    var cout = getArr(arr1);
    return cout.join(" ");
}

function getArr(array){                 //方法2
    var result = array.filter(function(item, index, array){
        if(array.indexOf(item) == index){
            return true;
        }
    })
    return result;
}


console.log(strConcat(str1,str2));

// var line;
// while(line = readline()){
//     var str1 = readline();
//     var str2 = readline();
//     print(strConcat(str1,str2));
// }