function getMinDownTime(n, m, t1, t2, t3, t4){

    // var time1 = parseInt((n-1)*t4);
    // var time2 = parseInt(Math.abs(m-n)*t1+2*t2+t3+(n-1)*t1);
    // return time1 > time2?time2:time1;

    if(m >= n){
        return Math.min((t4 * (n-1)), (t4*(m - n) + (t2 + t3) + (t1 * (m-1)) + t2), (t1 * (m-1) + 2 * t2 + t3))  
    }else{
        var arr = [];
        for(var i = 0;i < n-m;i++){
            arr.push((t4*i + t1 * (n - m - i) + t2 + t3 + (t1 * (n-1-i)) + t2));
        }
        var min = Math.min.apply(this,arr);
        return Math.min((t4 * (n-1)),min);
    }
}


// var flood;
// while(flood = read_line()){
//     var arr1 = flood.split(" ");
//     arr1 = arr1.map(function(item){
//         return parseInt(item);
//     });
//     var arr2 = read_line().split(" ");
//     arr2 = arr2.map(function(item){
//         return parseInt(item);
//     });
//     print(getMinDownTime(arr1[0]-1, arr1[1]-1, arr2[0], arr2[1], arr2[2], arr2[3]));
// }
console.log(getMinDownTime(70588, 77888,74941, 83989, 65232, 85705));