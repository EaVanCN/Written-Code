/**
 * @param {number} turnedOn
 * @return {string[]}
 */
 var readBinaryWatch = function(turnedOn) {
    let result = []
    for(let i = 0; i < 12; i++){
        for(let j = 0; j < 60; j++){
            if(get1CountOfHour(i) + get1CountOfMin(j) == turnedOn){
                result.push(i + ":" + (j<10?('0'+j):j))
            }
        }
    }
    return result;
};

var get1CountOfHour = function(hour){
    let result = [0,1,1,2,1,2,2,3,1,2,2,3,2]
    return result[hour]
}

var get1CountOfMin = function(min){
    let result = [0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5]
    return result[min]
}

let result = readBinaryWatch(1).toString();
console.log(result)