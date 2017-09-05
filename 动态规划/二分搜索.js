var arr = [1,2,3,4,5,6,7,9,12,14,16,17,23,26,28,267,288];
var n = 27;

var left = 0;
var right = arr.length;
function search(left,right){
    if (left > right){
        return -1;
    }
    var mid = Math.floor((left+right)/2);
    if(n > arr[mid]){
        left = mid+1;
        return arguments.callee(left,right);
    }else if(n < arr[mid]){
        right = mid-1;
        return arguments.callee(left,right);
    }else if(n == arr[mid]){
        return mid;
    }
}
console.log(search(left,right));
