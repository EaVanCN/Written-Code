function get01PackageAnswer(package){
    var weight = [2, 2, 6, 5, 4];
    var value = [6, 3, 5, 4, 6];
    var result = [];
    for(var i = weight.length; i>=0; i--){
        result[i] = [0];
        for (var j = 1; j <= package; j++) {
            result[i][j] = 0;
            if(j >= weight[i]){
                result[i][j] = Math.max(result[i+1][j], result[i][j-weight[i]]+value[i]);
            }else if(i < weight.length){
                result[i][j] = result[i+1][j];
            }
        }
    }
    return result[0][package];
}
//console.log(get01PackageAnswer(6));
