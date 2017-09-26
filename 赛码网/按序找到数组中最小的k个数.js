function getMinK(arr,k){
    var resultArr = [];
    var tempArr = arr.concat();
    arr.sort(function(a, b){return parseInt(a)-parseInt(b);});
    for(var i = 0; i < k; i++){
        var index = tempArr.indexOf(arr[i]);
        var obj = {};
        obj.val = arr[i];
        obj.index = index;
        resultArr.push(obj);
    }
    resultArr.sort(function(a,b){return a.index-b.index});
    return resultArr.map(function(item){
        return item.val;
    });
}

console.log(getMinK([7, 3, 2, 6, 1, 9, 10, 8],4));

// var line;
// while (line = read_line()){
//     var n = parseInt(line.split(" ")[0]);
//     var k = parseInt(line.split(" ")[1]);
//     var arr = [];
//     for(var i = 0; i < k; i++){
//         arr.push(read_line());
//     };
//     var result = getMinK(arr,k);
//     for(var j = 0;j < result.length; j++){
//         print(result[j]);
//     }
// }