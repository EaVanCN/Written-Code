/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 */
 var groupAnagrams = function(strs) {
    let result = [], index=0;
    let map = new Map();
    for(let item of strs){
        let strFlag = item.split("").sort().join("");
        if(map.has(strFlag)){
          result[map.get(strFlag)].push(item)
        }else{
          result.push([item])
          map.set(strFlag, index++)
        }
    }
    return result
};