var n = 7;
nums = [[6, 3],[8, 2],[9, 3],[7, 1],[6, 2],[5, 1],[7, 2]];
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
arr.forEach(function(item,index,array){
    if(item){
       for(var i = 0;i < 11; i++){
           if(!array[index][i]) array[index][i] = 0;
       }
    }else{
        array[index] = [];
        for(var i = 0;i < 11; i++){
            if(!array[index][i]) array[index][i] = 0;
        }  
    }
})
arr[0] = [0,0,0,0,0,5,0,0,0,0,0];






