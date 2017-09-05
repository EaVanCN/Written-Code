/**
 * 位置是负数或者是正数得到的结果应该是一样的。
 * 想要最少的次数，理论上一直向右次数最少。
 * 当超出之后，假如超出的是偶数d，则必有之前的第K步有2K = d,此时只要把k改成-k，就能直接走到目标点。
 *            假如是奇数，则再往前走一步，差值继续判断是否为偶数，偶数则可以到达目标点，奇数的话就再走一步，差值一定是偶数。         
 * 
 */


function getJumpTimes(n){
    n = Math.abs(n);
    var stepLength = 0;
    var step = 0;
    var count = 0;
    while(stepLength < n){
        step++;
        stepLength += step;
        count++;
    }
    var sub = stepLength - n;
    if(sub % 2 == 0){
        return count;
    }else{
        var addOneStep = sub + (++step);
        if(addOneStep % 2 == 0){
            return count +　1;
        }else{
            return count +　2;
        }
    }
}

// var line;
// while(line = read_line()){
//     print(getJumpTimes(parseInt(line)));
// }

console.log(getJumpTimes(2));