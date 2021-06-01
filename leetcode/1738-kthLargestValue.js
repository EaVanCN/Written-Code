
const kthLargestValue = (matrix, k)=> {
    let [m, n] = [matrix.length, matrix[0].length];
    let result = [];
    let finalArr = [];
    for(let i = 0; i < m; i++){
      result.push([]);
      for(let j = 0; j < n; j++){
        if(i == 0 && j == 0){
          result[i][j] = matrix[i][j]
        }else if(j == 0){
          result[i][j] = result[i-1][j] ^ matrix[i][j]
        }else if(i == 0){
          result[i][j] = result[i][j-1] ^ matrix[i][j]
        }else{
          result[i][j] = result[i-1][j] ^ result[i][j-1] ^ result[i-1][j-1] ^ matrix[i][j]
        }
        finalArr.push(result[i][j]);
      }
    }
    finalArr.sort((a, b)=>{
      return b - a
    })
    return finalArr[k-1];
}

console.log(kthLargestValue([[5,2,4,5,6],[1,6,3,4,2]], 4))