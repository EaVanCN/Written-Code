var arr = [61, 62, 100, 120];
function getStudent(arr){
    var type = "fail";
    if(arr[0]>=60 && arr[1] >=60 &&arr[2] >=90 && arr[3] >=90){
        if(arr[0]+arr[1]+arr[2]+arr[3] >=310){
            type = "Zifei";
        }
        if(arr[0]+arr[1]+arr[2]+arr[3] >=350){
            type = "Gongfei";
        }  
    }
    return type;
}

var num = parseInt(read_line());
for(var i = 0;i<num;i++){
    var arr = read_line();
    arr.forEach(function(item, index, array){
        array[index] = parseInt(item);
    });
    print(getStudent(arr));
}

