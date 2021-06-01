/**
 * @param {number[][]} grid
 * @return {number}
 */
//grid = [[1,3,1],[1,5,1],[4,2,1]]
//7
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let result = [[grid[0][0]]]
    for(let i=0; i<m; i++){
    	for(let j=0;j<n;j++){
    		if(i == 0 && j == 0){
    			result[i][j] = grid[i][j]
    		}else if(i == 0){
    			result[i][j] = result[i][j-1] + grid[i][j]
    		}else if(j == 0){
    			result[i] = [result[i-1][j] + grid[i][j]]
    		}else{
    			result[i][j] = grid[i][j] + Math.min(result[i][j-1], result[i-1][j])
    		}
    	}
    }
    return result[m-1][n-1]
};
let result = minPathSum([[1,2,3],[4,5,6]])
console.log(result)