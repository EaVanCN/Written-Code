// var n = 7;
// var nums = [[6, 3],[8, 2],[9, 3],[7, 1],[6, 2],[5, 1],[7, 2]];


//var line;
//while(line = read_line()){
    var arrNum = "5 2 4 5 6 8 1 8 1 9 2".split(" ");
//    var arrNum = line.split(" ");
    arrNum.forEach(function(item,index,array){
        array[index] = parseInt(item);
    });
    var n = arrNum[0];
    arrNum.splice(0,1);
    var nums = [];
    while (arrNum.length > 0){
        var tempArr = [];
        tempArr.push(arrNum[0]);
        tempArr.push(arrNum[1]);
        arrNum.splice(0,2);
        nums.push(tempArr);
    };
    var arr = [];
    for(var i = 0;i < n; i++){
        if(arr[nums[i][1]]){
            if(arr[nums[i][1]][nums[i][0]]){
                arr[nums[i][1]][nums[i][0]]++;
            }else{
                arr[nums[i][1]][nums[i][0]] = 1;
            }
        }else{
            arr[nums[i][1]] = [];
            if(arr[nums[i][1]][nums[i][0]]){
                arr[nums[i][1]][nums[i][0]]++;
            }else{
                arr[nums[i][1]][nums[i][0]] = 1;
            }
        }
    }
    for(var index = 0; index < arr.length; index++){
        if(arr[index]){
            for(var i = 0;i < 11; i++){
                if(!arr[index][i]) arr[index][i] = 0;
            }
         }else{
            arr[index] = [];
            for(var i = 0;i < 11; i++){
                if(!arr[index][i]) arr[index][i] = 0;
            }  
         }
    }
//}

function maxCoins(i,j,array){
    var length = array.length-1;
    if (i == length) return array[i][j];
    if(j < 10 && j > 0){
        var x = arguments.callee(i+1,j-1,array); 
        var y = arguments.callee(i+1,j,array);      
        var z = arguments.callee(i+1,j+1,array); 
        return Math.max(x,y,z)+array[i][j];
    }else if(j < 10){
        var y = arguments.callee(i+1,j,array);      
        var z = arguments.callee(i+1,j+1,array); 
        return Math.max(y,z)+array[i][j];
    }else if(j > 0){
        var x = arguments.callee(i+1,j-1,array); 
        var y = arguments.callee(i+1,j,array);  
        return Math.max(x,y)+array[i][j];
    }
}
for(var i = 0;i<arr.length;i++){
    console.log(arr[i].join());
}
console.log(maxCoins(0, 5, arr));



//递归方式的求解
