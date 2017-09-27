var Graph = {
    a : [{b : 50},{c : 70}],
    b : [{c : 15},{d : 30}],
    c : [{e : 40}],
    d : [{e : 20}],
    e : []
};

function Dijkstra(Graph,startV,endV){
    var vertex = Object.keys(Graph);
    var dist = {};             //用于记录所有的记录
    var road = {};             //用于记录路径
    vertex.forEach(function(item){
        dist[item] = Infinity;
    });
    dist[startV] = 0;
    var flag = false;
    while(!flag){
        Object.keys(dist).forEach(function(item){
            if(dist[item] != Infinity){
                Graph[item].forEach(function(ava){
                    for(var key in ava){
                        road[key] = ava[key]+dist[item] < dist[key] ? item : road[key];     //记录当前点是从哪个点来的
                        dist[key] = Math.min(ava[key]+dist[item],dist[key]);       
                    }
                })
            }
        });
        flag = Object.keys(dist).every(function(item){
            return dist[item] != Infinity ? true : false;
        })
    }
    v = endV;
    var roadStr = "";
    while (v != startV){
        roadStr =  v + "->" + roadStr;
        v = road[v];
    }
    roadStr = startV + "->" + roadStr;
    roadStr = roadStr.slice(0,-2);

    console.log(roadStr+"("+dist[endV]+")");            //路径+长度
}

Dijkstra(Graph,"a","e");






// var line;
// while(line = read_line()){
//     var star = line.split(" ")[0];
//     var end = line.split(" ")[1];
//     var s = "";
//     var str = [];
//     while(s = read_line()){
//         str.push(s);
//     }
//     var obj = {};
//     for(var i = 0;i < str.length; i++){
//         var arr = str[i].split(" ");
//         if(obj[arr[0]]){
//             var tempObj = {};
//             tempObj[arr[1]] = parseInt(arr[2]);
//             obj[arr[0]].push(tempObj);
//         }else{
//             var tempObj = {};
//             tempObj[arr[1]] = parseInt(arr[2]);
//             obj[arr[0]] = [tempObj];
//         }
//     }
//     Dijkstra(obj,start,end);
// }




// var start = "1000";
// var end = "1050";
// var str = ["1000 1020 50","1000 1030 70","1020 1040 30","1020 1030 15","1030 1050 40","1040 1050 20"];
// var obj = {};
// for(var i = 0;i < str.length; i++){
//     var arr = str[i].split(" ");
//     if(obj[arr[0]]){
//         var tempObj = {};
//         tempObj[arr[1]] = parseInt(arr[2]);
//         obj[arr[0]].push(tempObj);
//     }else{
//         var tempObj = {};
//         tempObj[arr[1]] = parseInt(arr[2]);
//         obj[arr[0]] = [tempObj];
//     }
// }

// Dijkstra(obj,start,end);