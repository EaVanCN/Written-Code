var road = "atob";
var firstSee = "a";
var secSee = "b";



function bestBr(road,firstSee,secSee){
    var curIndex = 0;
    var leftCross = false;
    var rightCross = false;
    var first = road.indexOf(firstSee);
    if(first > -1){
        var sec = road.indexOf(secSee,first+firstSee.length);
        if(sec > -1){
            leftCross = true;
        }
    };
    
    var road = road.split("").reverse().join("");
    var first = road.indexOf(firstSee);
    if(first > -1){
        var sec = road.indexOf(secSee,first+firstSee.length);
        if(sec > -1){
            rightCross = true;
        }
    };

    if(leftCross && rightCross){
        return "both";
    }else if(leftCross){
        return "forward";
    }else if(rightCross){
        return "backward";
    }
    return "invalid";
}

console.log(bestBr(road,firstSee,secSee));