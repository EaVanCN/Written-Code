var array = [1,1,2,2,3,3,3,2,1,4,7,6,4,4,4,6,6,7,8,2,2,1,4,12,12,12];
// function getArr(array){              //方法1
//     var pattern = /(\w)\1*/g;
//     var arr = array.sort(function(a,b){return b-a;}).join("").match(pattern);
//     var resultArr = [];
//     console.log(arr.join(","));
//     for(var item in arr){
//         resultArr.push(arr[item].split("")[0]);
//     }
//     return resultArr;
// }



function getArr(array){                 //方法2
    var result = array.filter(function(item, index, array){
        if(array.indexOf(item) == index){
            return true;
        }
    })
    return result;
}
console.log(getArr(array).join(","));




var result = new Set(array);            //法3
console.log([...result])




