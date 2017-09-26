var str = "looks good to me";

function suoxie(str){
    var arr = str.split(" ");
    var result = [];
    arr.forEach(function(item){
        if(item){
            result.push(item.slice(0,1));
        }
    });
    return result.join("");
}
//console.log(suoxie(str));
var str;
while(str = readline()){
    print(suoxie(str));
}