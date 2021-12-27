/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
 var colorBorder = function(grid, row, col, color) {
    let m = grid.length,n = grid[0].length;
    let result = Array(m).fill(0).map(()=>Array(n).fill(0));
    let map = new Map();
    let pivot = grid[row][col];
    (function DFS(row, col){
        if(map.has(""+row+col)) return;     //已经处理过的格子不再处理
        if(grid[row][col] != pivot) return; //如果当前格子不属于连通变量，也不再处理了
        map.set(""+row+col, 1);             //记录一下，防止重复
        if(row-1 >= 0) DFS(row-1, col);
        if(col-1 >= 0) DFS(row, col-1);
        if(row+1 <= m-1) DFS(row+1, col);
        if(col+1 <= n-1) DFS(row, col+1);
        let isBorder = row == 0 || col == 0 || row == m-1 || col == n-1;
        result[row][col] = color;
        if(!isBorder && grid[row-1][col] == pivot && grid[row][col-1] == pivot && grid[row+1][col] == pivot && grid[row][col+1] == pivot){
            result[row][col] = grid[row][col];
        }
    })(row, col)
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            result[i][j] = result[i][j] || grid[i][j];
        }
    }
    return result;
};