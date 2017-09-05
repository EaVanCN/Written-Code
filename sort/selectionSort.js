function ArrayList(){
    var array = [];
    this.insert = function(item){
        array.push(item);
    };
    this.toString = function(){
        return array.join();
    };
   
    this.selectionSort = function(){
        var length = array.length,
            indexMin;
        for (var i = 0; i < length-1; i++) {
            indexMin = i;
            for(var j = i;j<length;j++){
                if(array[indexMin] > array[j]){
                    indexMin = j;
                }
            }
            if(i != indexMin){
                swap(i, indexMin);
            }
        } 
    }
    var swap = function(index1, index2){
        array[index1] ^= array[index2];
        array[index2] ^= array[index1];
        array[index1] ^= array[index2]; 
    }
}
function createNonSortedArray(size){
    var array = new ArrayList();
    for (var i = size; i > 0; i--) {
        array.insert( parseInt(Math.random()*10000));  
    }
    return array;
}
var arr = createNonSortedArray(10000);
console.log(arr.toString());
var t1 = new Date().getTime();
arr.selectionSort();
var t2 = new Date().getTime();
console.log(arr.toString());
console.log(t2-t1);