/**
 * 给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。求最多有多少个点在同一条直线上。
 * 
 * 输入：points = [[1,1],[2,2],[3,3]]
 * 输出：3
 * 
 * 输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 输出：4
 * 
 * 思路：任找两点，连成直线，找这条直线过的点。
 *      维护一个map，这两点产生直线所经过点的下标。
 *      遍历的时候，发现在map中，就跳过这两个点。
 *      返回map里长度最大的value的length
 * 
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    var length = points.length;
    if(length == 1) return 1;
    var maxVal = 2;
    for(let i = 0; i < length-2; i++){          //在这一趟循环中找两个点,分别计算跟初始点的斜率，如果相同在一条线上，同时map里放一条记录
        for(let j = i+1; j < length-1; j++){
            let count = 2;
            let p2Slope = getSlopeKey(points[i], points[j]);
            for(let l = j+1; l<length; l++){
                let p3Slope = getSlopeKey(points[i], points[l]);
                if(p2Slope == p3Slope) count++
            }            
            maxVal = Math.max(maxVal, count);
        }
    }
    return maxVal;
};

var getSlopeKey = function(p1, p2) {        //斜率表达式
    const [x, y] = [p1[0] - p2[0], p1[1] - p2[1]];
    if(p1[0] == p2[0]) return "x";
    if(p1[1] == p2[1]) return "y";
    const k = gcd(x, y);
    return `${y / k}/${x / k}`;
}

var gcd = function(a, b){
    let c = a % b;
    return c == 0 ? b : gcd(b, c);
}

let result = maxPoints([[-6,-1],[3,1],[12,3]]);
console.log(result);