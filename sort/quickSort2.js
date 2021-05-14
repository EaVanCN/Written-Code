const quickSort = (array)=>{
  quick(array, 0, array.length - 1)
}

const quick = (array, left, right)=>{
  if(left < right){
    let index = getIndex(array, left, right);
    quick(array, left, index-1)
    quick(array, index+1, right)
  }
}

const getIndex = (array, leftPoint, rightPoint)=>{
  let pivot = array[leftPoint];
  while(leftPoint < rightPoint){
    while(leftPoint < rightPoint && array[rightPoint] >= pivot) {
      rightPoint--;
    }
    array[leftPoint] = array[rightPoint]
    // swap(array, leftPoint, rightPoint) 			//使用swap，则与动态图演示效果完全一致
    while(leftPoint < rightPoint && array[leftPoint] <= pivot) {
      leftPoint++;
    }
    array[rightPoint] = array[leftPoint]
    // swap(array, leftPoint, rightPoint)
  }
  array[leftPoint] = pivot
  return leftPoint;
}

const swap = (array, index1, index2)=>{
  var aux = array[index1];
  array.splice(index1, 1, array[index2])
  array.splice(index2, 1, aux)
}

const createNonSortedArray = (size)=>{
  var array = new Array();
  for (var i = size; i > 0; i--) {
    //array.push(parseInt(Math.random()*100));
    array.push(i*(100/size));
    array.sort(function() {
      return (0.5-Math.random());
    });
  }
  return array;
}

var arr = createNonSortedArray(20);
quickSort(arr)
console.log(arr)