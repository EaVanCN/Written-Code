var url = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe";

function getUrlParam(sUrl, sKey) {
    var len = arguments.length;
    if(len == 2){
        var parmStr = sUrl.split("?")[1];
        var parmArr = parmStr.split("&");
        var result = [];
        parmArr.forEach(function(item, index, array){
            if(item.split("=")[0] == sKey){
                if(index == array.length - 1 && item.indexOf("#") > 0){
                    result.push(item.split("=")[1].split("#")[0]);
                }else{
                    result.push(item.split("=")[1]);
                }
            }
        })
        if(result.length == 0){
            return " ";
        }else{
            if(result.length == 1){
                return result[0];
            }else{
                return result;
            }
        }
    }else if(len == 1){
        if(sUrl.indexOf('?') == -1){
            return {};
        }
        var parmStr = sUrl.split("?")[1];
        var parmArr = parmStr.split("&");
        var result = {};
        parmArr.forEach(function(item, index, array){
            if(index == array.length-1){
                item = item.split("#")[0];
            }
            var parmKey = item.split("=")[0];
            var parmVal = item.split("=")[1];
            if(!result[parmKey]){
                result[parmKey] = parmVal;
            }else{
                if(typeof result[parmKey] == "string"){
                    result[parmKey] = [result[parmKey]];
                    result[parmKey].push(parmVal);
                }else{
                    result[parmKey].push(parmVal);
                }
            }
        })
        return result;
    }
}
