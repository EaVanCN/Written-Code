/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let result = [];
   let obj = {}
   words.forEach(item=>{
      obj[item] ? obj[item]++ : obj[item] = 1
   })
   let arr = Object.entries(obj).sort(([key1,val1],[key2,val2])=>{
       return val2 - val1 || key1.localeCompare(key2)
   })
   for(let i = 0; i < k; i++){
       result.push(arr[i][0])
   }
   return result
};

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
