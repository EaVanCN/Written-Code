// function ArrayList(){
//     var array = [];
//     this.insert = function(item){
//         array.push(item);
//     };
//     this.toString = function(){
//         return array.join();
//     };
//     //归并排序
//     //包括分治和合并两步，将数组分成长度为一的小数组，然后将小数组两两合并，进行排序。
//     this.mergeSort = function(){
//         array = mergeSortRec(array);
//     }
//     var mergeSortRec = function(array){
//         var length = array.length;
//         if (length === 1) {
//             return array;
//         }
//         var mid = Math.floor(length / 2),
//             left = array.slice(0, mid),
//             right = array.slice(mid, length);
//         return merge(mergeSortRec(left), mergeSortRec(right));
//     }
//     var merge = function(left, right){
//         var result = [],
//             il = 0,
//             ir = 0;
//         while(il < left.length && ir < right.length){
//             if(left[il] < right[ir]){
//                 result.push(left[il++]);
//             }else{
//                 result.push(right[ir++]);
//             }
//         }
//         while(il < left.length){
//             result.push(left[il++]);
//         }
//         while(ir < right.length){
//             result.push(right[ir++]);
//         }
//         return result;
//     }
// }
// function createNonSortedArray(size){
//     var array = new ArrayList();
//     for (var i = size; i > 0; i--) {
//         array.insert( parseInt(Math.random()*10000));  
//     }
//     return array;
// }

// var arr = createNonSortedArray(10000);
// //console.log(arr.toString());
// var t1 = new Date().getTime();
// arr.mergeSort();
// var t2 = new Date().getTime();
// //console.log(arr.toString());
// console.log(t2-t1);

var mergeSort = function(array){
    return mergeSortRec(array);
}
var mergeSortRec = function(array){
    var length = array.length;
    if (length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
}
var merge = function(left, right){
    var result = [],
        il = 0,
        ir = 0;
    while(il < left.length && ir < right.length){
        if(left[il] < right[ir]){
            result.push(left[il++]);
        }else{
            result.push(right[ir++]);
        }
    }
    while(il < left.length){
        result.push(left[il++]);
    }
    while(ir < right.length){
        result.push(right[ir++]);
    }
    return result;
}

var createNonSortedArray = function(size){
    var array = new Array();
    for (var i = size; i > 0; i--) {
        array.push( parseInt(Math.random()*100) );  
    }
    return array;
}

var arr = createNonSortedArray(10);
arr = mergeSort(arr)
console.log(arr)

