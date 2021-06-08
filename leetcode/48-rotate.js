/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    var k = matrix.length;
    let mid = k/2
    for(let i = 0;i < k; i++){              //先右上左下对角线反转，再上下反转
        for(let j = 0; j<k-i; j++){
            let n = k-j-1
            let m = k-i-1
            if(!(i == n && j == m)) swap1(matrix,i,j,n,m)
        }
    }
    for(let i = 0;i < k/2; i++){ 
        let n = k-1-i
        if(i != n) swap2(matrix, i, n)
    }
};

var swap1 = function(matrix, i, j, n, m){
    let temp = matrix[i][j];
    matrix[i][j] = matrix[n][m];
    matrix[n][m] = temp;
}

var swap2 = function(matrix,i,j){
    let temp = matrix[i];
    matrix[i] = matrix[j];
    matrix[j] = temp;
}

let res = [[1,2,3],[4,5,6],[7,8,9]]
rotate(res)
console.log(res)