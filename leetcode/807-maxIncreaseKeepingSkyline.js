/**
 * 
 * 例子：
 * 输入： grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
 * 输出： 35
 * 解释： 
 * The grid is:
 * [ [3, 0, 8, 4], 
 * [2, 4, 5, 7],
 * [9, 2, 6, 3],
 * [0, 3, 1, 0] ]
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let row = grid.length, col = grid[0].length;
    let result = 0;
    let maxCol = Array(col).fill(-1);
    for(let i = 0; i < row; i++){
        let maxCurRow = Math.max(...grid[i]);
        for(let j = 0; j < col; j++){
            if(maxCol[j] < 0){      //还未计算出当前列的最大值
                maxCol[j] = grid.reduce((acc, item)=> Math.max(acc, item[j]), 0)
            }
            result += Math.min(maxCurRow, maxCol[j]) - grid[i][j]
        }
    }
    return result;
};

var val = maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])
console.log(val);
