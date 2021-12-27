/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * 
 * timeSeries = [1,4], duration = 2
 * 4
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let total = duration;
    for(let i = 1; i< timeSeries.length; i++){
        total += Math.min(timeSeries[i] - timeSeries[i-1], duration);
    }
    return total;
};  

var val = findPoisonedDuration([1,2], 2)
console.log(val);