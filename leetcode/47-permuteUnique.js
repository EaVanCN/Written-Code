
var permuteUnique = function(nums) {
    let length = nums.length;
    let expTimes = 1;
    let result = [[nums[0]]]
    while(expTimes < length){
        [...result].forEach(item=>{
            result.shift();
            for(let i=0;i < item.length; i++){
                if(nums[expTimes] == item[i]) continue;
                let temp = [...item];
                temp.splice(i, 0, nums[expTimes]);
                result.push(temp)
            }
            let temp = [...item];
            temp.push(nums[expTimes])
          	result.push(temp)
        })
        expTimes++
    }
    result = result.map(item=>JSON.stringify(item))
    result = result.filter((item,index,arr)=>{
        return arr.indexOf(item) == index
    });
    return result.map(item=>{
        return JSON.parse(item)
    })
};
let resul = permuteUnique([2,1,1])
console.log(resul)
