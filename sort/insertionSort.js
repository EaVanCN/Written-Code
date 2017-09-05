function ArrayList(){
    var array = [];
    this.insert = function(item){
        array.push(item);
    };
    this.toString = function(){
        return array.join();
    };

    this.insertionSort = function(){
        var length = array.length,
            temp,j;
        for(var i = 1;i<length;i++){
            j = i;
            temp = array[i];
            while(j > 0 && array[j-1] > temp){
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }
    }
}
function createNonSortedArray(size){
    var array = new ArrayList();
    for (var i = size; i > 0; i--) {
        array.insert( parseInt(Math.random()*1000));  
    }
    return array;
}
var arr = createNonSortedArray(10);
console.log(arr.toString());
var t1 = new Date().getTime();
arr.insertionSort();
var t2 = new Date().getTime();
console.log(arr.toString());
console.log(t2-t1);