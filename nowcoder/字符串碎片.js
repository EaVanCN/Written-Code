var s = "aaabbaaac";


function getPieceAvg(s){
    var pattern = /(\w)\1*/g;
    var arr = s.match(pattern);
    var count = 0;
    arr.forEach(function(element) {
        count += element.length;
    }, this); 
    return (count/arr.length).toFixed(2);
}
console.log(getPieceAvg(s));