function count(str) {
	var str = str.replace(/\s+/g,"");
    var pattern = /(\w)\1*/g;
    var arr = str.split("").sort().join("").match(pattern);
    var result = {};
    arr.forEach(function(item,index,array){
        var curChar = item.split("")[0];
        result[curChar] = item.length;
    });
    return result;
}
var str = 'hello world';
console.log(count(str));