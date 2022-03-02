/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    path = path.replace(/\/+/g,"/");
    const ans = [];
    const pathArr = path.split("/");
    for(let i = 1; i< pathArr.length; i++){
        let curPath = pathArr[i];
        if(curPath){
            if(curPath == ".."){
                ans.length > 0 && ans.pop();
            }else if(curPath != "."){
                ans.push(curPath);
            }
        }
    }
    return `/${ans.join("/")}`
};
const result = simplifyPath("/a/./b/../../c/");
console.log(result);