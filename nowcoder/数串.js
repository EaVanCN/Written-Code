var n = 4;
var arr = [];
var line;
/* 
while(line = readline()){
    var str = readline();
*/
var str = "12 123";
    arr = str.split(" ");
    arr.sort(function(x,y){
            if(x+y<y+x){
                return 1;      
            }
            if(x+y>y+x){            
                return -1;        
            }        
            return 0;    
        }); 
        console.log(arr.join(""));
/*
}
*/

/**
var resultArr = [];
var arr3 = [];      //三位数
var arr2 = [];      //二位数
var arr1 = [];      //一位数
for (var index = 0; index < arr.length; index++) {
    if(arr[index]/100 >= 1){
        arr3.push(arr[index]);
    };
    if(arr[index]/10 >= 1 && arr[index]/10 < 10){
        arr2.push(arr[index]);
    }
    if(arr[index] >= 0 && arr[index] < 10){
        arr1.push(arr[index]);
    }
}
console.log(arr3);
console.log(arr2);
console.log(arr1);
function quick(array, left, right){
    var index;
    if(array.length > 1){
        index = partition(array, left, right);
        if(left < index-1){
            quick(array, left, index-1);
        }
        if(index < right){
            quick(array, index, right);
        }
    };
}
function partition(array, left, right){
    var pivot = array[Math.floor((right + left)/2)],
        i = left,
        j = right;
    while(i <= j){
        while(array[i] > pivot){
            i++;
        }
        while(array[j] < pivot){
            j--;
        }
        if(i<=j){
            swapQuickStort(array,i,j);
            i++;
            j--;
        }
    }
    return i;
}
function swapQuickStort(array,index1,index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}
quick(arr3,0,arr3.length-1);
quick(arr2,0,arr2.length-1);
quick(arr1,0,arr1.length-1);

 */


/*
arr.sort(function(x,y){
    if(x+y<y+x){
        return 1;      
    }
    if(x+y>y+x){            
        return -1;        
    }        
    return 0;    
}); 
console.log(arr.join(""));
*/