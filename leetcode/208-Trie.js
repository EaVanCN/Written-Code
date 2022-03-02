/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class Trie {
    constructor(){
        this.children = {}
    }
    /** 
     * @param {string} word
     * @return {void}
     */
    insert(word){
        let nodes = this.children;
        for(let char of word){
            if(!nodes[char]) nodes[char] = {};
            nodes = nodes[char];
        }
        nodes.isEnd = true;
        return null;
    }
    searchPrefix(word){
        let nodes = this.children;
        for(let char of word){
            if(!nodes[char]) return false;
            nodes = nodes[char];
        }
        return nodes;
    }
    /** 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.searchPrefix(word);
        return node && !!node.isEnd
    }
    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return !!this.searchPrefix(prefix);
    }
}


let parm1 = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
let parm2 = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]

let base = null;
var result = []
for(let i = 0; i< parm1.length; i++){
    if(parm1[i] == "Trie"){
        base = new Trie();
        result.push(null)
    }else{
        result.push(eval(`base.${parm1[i]}(parm2[i][0])`));
    }
}
console.log(result);