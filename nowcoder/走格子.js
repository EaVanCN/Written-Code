var str = "3 2";

function getStep(m,n){
    var tarArr = [];
    for(var i = 0; i <= m; i++){
        tarArr[i] = [];
        for(var j = 0; j <= n; j++){
            if(j == n || i == m){
                tarArr[i].push(1);
            }else{
                tarArr[i].push(0);
            } 
        }
    }
    tarArr[m][n] = 0;
    for(var i = m-1;i>-1;i--){
        for(var j = n-1; j > -1; j--){
            tarArr[i][j] = tarArr[i+1][j]+tarArr[i][j+1];
        }
    }
   console.log(tarArr[0][0]);
}


getStep(3,2);

