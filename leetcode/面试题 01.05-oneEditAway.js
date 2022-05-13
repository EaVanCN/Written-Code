/**
 * 
 * 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 * 
 * 示例 1:
 * 输入: 
 * first = "pale"
 * second = "ple"
 * 输出: True
 * 
 * 示例 2:
 * 输入: 
 * first = "pales"
 * second = "pal"
 * 输出: False
 * 
 * 
 * 
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */ 
 var oneEditAway = function(first, second) {
    if(first.length == second.length){
        let diff = 0;
        for(let i = 0; i<first.length; i++){
            if(first[i] != second[i]) diff++
        }
        return diff <= 1
    } 
    if(Math.abs(first.length - second.length) == 1){
        let [langStr, shortStr] = first.length > second.length ? [first, second] : [second, first];
        let j = 0;
        while(langStr[j] == shortStr[j]) j++
        let arr = langStr.split("")
        arr.splice(j, 1)
        return arr.join("") == shortStr
    }
    return false
};

const [first, second] = ["pa", "pp"]
console.log(oneEditAway(first, second))