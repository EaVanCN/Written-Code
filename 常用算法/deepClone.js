/**
 * 可以拷贝数组和对象的深拷贝,同时解决循环引用
 */

function deepCopy(obj){
    const map = new WeakMap();
    function dp(obj){
        let result = '';
        if(isType(obj, "Function")) return Object.assign(obj);
        if(isType(obj, "Object")) result = {};
        if(isType(obj, "Array")) result = [];
        let keysArr = Object.keys(obj),
            key = null,
            temp = null;
        for(let i = 0; i < keysArr.length; i++){
            key = keysArr[i];    
            temp = obj[key];
            if(temp && isObj(temp)) {
                if(map.get(temp)){
                    result[key] = temp;
                }else {
                    map.set(temp, result);
                    result[key] = dp(temp);
                }
            }else{
                result[key] = temp;
            }
        }
        return result;
    }
    return dp(obj)
}

const isType = (obj, name)=>{           //判断对象是那种类型，用于判断Array, Object, Function
    return Object.prototype.toString.call(obj) == `[object ${name}]`
}
const isObj = (obj) => {
    const typeArr = ['Object', 'Array', 'Function'];
    return typeArr.some(item=>{
        return `[object ${item}]` == Object.prototype.toString.call(obj)
    })
}



let c = {
    a: 22
}

let obj = {
    a: c,
    b: {
        c: c 
    }
}
obj['c'] = obj.a
let arr = [1,2,3,4]
let fun = function(a){
    console.log(a)
}
console.log(JSON.stringify(obj))
let result = deepCopy(obj);
console.log(JSON.stringify(result))