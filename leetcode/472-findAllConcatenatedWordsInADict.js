/**
 * 输入：words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * 输出：["catsdogcats","dogcatsdog","ratcatdogcat"]
 * 解释："catsdogcats" 由 "cats", "dog" 和 "cats" 组成; 
 *      "dogcatsdog" 由 "dog", "cats" 和 "dog" 组成; 
 *      "ratcatdogcat" 由 "rat", "cat", "dog" 和 "cat" 组成。
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findAllConcatenatedWordsInADict = function(words) {
    let trie = new Trie();
    let ans = Array();
    words.sort((a,b)=>a.length-b.length);
    words.forEach(item=>{
        if(!item) return;
        if(dfs(trie, item)){
            ans.push(item);
        }else{
            trie.insert(item);
        }
    })
    return ans;
};

var dfs = function(trie, word){
    if (word.length == 0) return true;
    let nodes = trie.children;
    for(let i = 0; i<word.length; i++){
        let char = word[i];
        nodes = nodes[char]
        if(!nodes) return false;
        if(nodes.isEnd && dfs(trie, word.slice(i+1))) return true;
    }
    return false;
}

class Trie {
    constructor(){
        this.children = {}
    }
    insert(word){
        let nodes = this.children;
        for(let char of word){
            if(!nodes[char]) nodes[char] = {};
            nodes = nodes[char];
        }
        nodes.isEnd = true;
    }
}

let words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
let result = findAllConcatenatedWordsInADict(words);
console.log(result);