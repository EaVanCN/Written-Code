// function ArrayList(){
//     var array = [];
//     this.insert = function(item){
//         array.push(item);
//     };
//     this.toString = function(){
//         return array.join();
//     };
//     //冒泡排序
//     this.bubbleSort = function(){
//         var length = array.length//, didSwap = false;
//         for (var i = 0; i < length; i++) {
//             for (var j = 0; j < length-1-i; j++) {
//                 if (array[j] > array[j+1]) {
//                     swap(j, j+1);
//                     didSwap = true;
//                 }
//             }  
//             if(!didSwap) break;
//         }
//     }
//     var swap = function(index1, index2){
//         var aux = array[index1];
//         array[index1] = array[index2];
//         array[index2] = aux;
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
// console.log(arr.toString());
// var t1 = new Date().getTime();
// arr.bubbleSort();
// var t2 = new Date().getTime();
// console.log(arr.toString());
// console.log(t2-t1);

var bubbleSort = function(array){			//冒泡排序
    var length = array.length
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length-1-i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
    }
}

var swap = function(array, index1, index2){		//交换两个元素的位置
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}
var createNonSortedArray =function(size){			//创建一个size大小的无序列表ArrayList
    var array = new Array();
    for (var i = size; i > 0; i--) {
        array.push( parseInt(Math.random()*10000));
    }
    return array;
}

var arr = createNonSortedArray(10000);
bubbleSort(arr);

console.log(arr.join(","));