/**
 * 你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：
 * 写出一个秘密数字，并请朋友猜这个数字是多少。朋友每猜测一次，你就会给他一个包含下述信息的提示：
 * 猜测数字中有多少位属于数字和确切位置都猜对了（称为 "Bulls", 公牛），
 * 有多少位属于数字猜对了但是位置不对（称为 "Cows", 奶牛）。也就是说，这次猜测中有多少位非公牛数字可以通过重新排列转换成公牛数字。
 * 给你一个秘密数字 secret 和朋友猜测的数字 guess ，请你返回对朋友这次猜测的提示。
 * 提示的格式为 "xAyB" ，x 是公牛个数， y 是奶牛个数，A 表示公牛，B 表示奶牛。
 * 请注意秘密数字和朋友猜测的数字都可能含有重复数字。

 * 示例 1:
 * 输入: secret = "1807", guess = "7810"
 * 输出: "1A3B"
 * 解释: 数字和位置都对（公牛）用 '|' 连接，数字猜对位置不对（奶牛）的采用斜体加粗标识。
 * "1807"
 *   |
 * "7810"
 * 
 * 示例 2:
 * 输入: secret = "1123", guess = "0111"
 * 输出: "1A1B"
 * 解释: 数字和位置都对（公牛）用 '|' 连接，数字猜对位置不对（奶牛）的采用斜体加粗标识。
 * "1123"        "1123"
 *   |      or     |
 * "0111"        "0111"
 * 注意，两个不匹配的 1 中，只有一个会算作奶牛（数字猜对位置不对）。通过重新排列非公牛数字，其中仅有一个 1 可以成为公牛数字。

 * 示例 3：
 * 输入：secret = "1", guess = "0"
 * 输出："0A0B"

 * 示例 4：
 * 输入：secret = "1", guess = "1"
 * 输出："1A0B"
 * 
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 * 第一遍循环找出所有公牛，并将其从原数组中删掉，然后再将剩余两个数组变成一个map,然后将map中对照，取小值作为奶牛
 */
 var getHint = function(secret, guess) {
    var secretArr = secret.split("");
    var guessArr = guess.split("");
    var len = secretArr.length, i = 0;
    let arr1 = [...secretArr], arr2 = [...guessArr];
    let secretMap = new Map(), guessMap = new Map();
    let bulls = 0, cows = 0;
    while(i < len){
        if(arr1[i] == arr2[i]){
            secretArr.splice(i, 1, -1);
            guessArr.splice(i, 1, -1);
            bulls++;
            console.log(secretArr, guessArr)
        }
        i++;
    }
    let newLen = secretArr.length, j = 0;
    
    while(j < newLen){
        secretMap.get(secretArr[j]) ? secretMap.set(secretArr[j], secretMap.get(secretArr[j])+1) : secretMap.set(secretArr[j], 1);
        guessMap.get(guessArr[j]) ? guessMap.set(guessArr[j], guessMap.get(guessArr[j])+1) : guessMap.set(guessArr[j], 1);
        j++
    }
    for(let item of secretMap.keys()){
        item != -1 && (cows += Math.min(secretMap.get(item) || 0, guessMap.get(item) || 0))
　　}
    return "" + bulls + "A" + cows + "B";
};
let result = getHint("111","111")
console.log(result);