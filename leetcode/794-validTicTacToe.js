/**
 * 
 * board = ["XOX"," X ","   "]
    输出：false
 * 
 * 输入：board = ["XOX","O O","XOX"]
    输出：true

 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  let Xnum = 0, Onum = 0;
  let boardArr = board.map(item=>{
    let cur = item.split("");
    cur.forEach(item=>{
        item == "X" && Xnum++;
        item == "O" && Onum++;
    })
    return item.split("");
  });
  if(Xnum - Onum > 1 || Onum - Xnum > 0) return false;     //没有轮流下子
  let isXwin = checkWin('X', boardArr);
  let isOwin = checkWin('O', boardArr);
  if(isXwin && isOwin) return false;
  if(isXwin && Xnum != Onum + 1) return false;
  if(isOwin && Xnum != Onum) return false;
  return true;
};
var checkWin = function(char, boardArr){
  let checkArr = flat(boardArr);
  let result = false;
  const lines = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  lines.forEach(item=>{
    const [a, b, c] = item;
    if (checkArr[a].trim() === char && checkArr[a] === checkArr[b] && checkArr[a] === checkArr[c]) {
      result = true;
    }
  })
  return result;
}
var flat = function(arr){
  return arr.reduce((acc, val) => acc.concat(val), []);
}

let result = validTicTacToe(["XXX","OOX","OOX"]);
console.log(result);