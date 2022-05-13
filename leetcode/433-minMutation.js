/**
 * 基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。
 * 假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。
 * 例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
 * 另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。
 * 给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。
 * 注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。
 * 
 * 示例 1：
 * 输入：start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
 * 输出：1
 * 
 * 示例 2：
 * 输入：start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
 * 输出：2
 * 
 * 示例 3：
 * 输入：start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
 * 输出：3
 * 
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
 var minMutation = function(start, end, bank) {
    if(bank.indexOf(end) < 0) return -1;
    const result = []
    const startIndex = bank.indexOf(start);
    if(startIndex > -1) bank.splice(startIndex, 1);
    (function handler(temp, remaind){
        const pivot = temp[temp.length - 1]
        if(pivot == end) result.push(temp.length);
        remaind.forEach((item, index)=>{
            const cur = [...remaind];
            if(diff(pivot, item)){
                cur.splice(index, 1);
                handler(temp.concat(item), cur);
            } 
        })
    })([start], bank)
    if(result.length == 0) return -1
    return Math.min(...result) - 1
};

const diff = (str1, str2)=>{
    const arr1 = str1.split("");
    const arr2 = str2.split("");
    return arr1.filter((item, index)=>{
        return item != arr2[index]
    }).length == 1;
}

let start = "AACCTTGG", end = "AATTCCGG", bank = ["AATTCCGG","AACCTGGG","AACCCCGG","AACCTACC"]
console.log(minMutation(start, end, bank))