/**
 * 
 * 输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
输出：true
解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
示例 2：

输入：hand = [1,2,3,4,5], groupSize = 4
输出：false
解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。
 * 
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
 var isNStraightHand = function(hand, groupSize) {
    const n = hand.length;
    if(n % groupSize != 0) return false;
    hand.sort((a,b)=>a-b);
    const map = hand.reduce((acc, item)=>(acc.set(item, (acc.get(item)||0)+1), acc), new Map());
    for(const x of hand){
        if(!map.has(x)) continue;
        for(let i = 0; i<groupSize; i++){
            const curNum = x+i
            if(!map.has(curNum)) return false;
            map.get(curNum) > 1 ? map.set(curNum, map.get(curNum)-1) : map.delete(curNum);
        }
    }
    return true;
};

let hand = [8,10,12]
let groupSize = 3
let result = isNStraightHand(hand, groupSize)
console.log(result);

// 思路跟我一开始就一样，只不过我想象中要去遍历生成的map,这样就有问题，1：map不是按照插入时间有序的，它没有前后顺序的概念，所以遍历它不能保证还是按照之前排好的顺序，2：需要在遍历的时候删除掉一些元素，边遍历边删除是大忌。



//这两天脑子里又对雪穗和亮司的共生产生了一点思考
//书中很明确的表示出二人"共生"关系，而且用了枪虾与虾虎鱼来做比喻。那么是怎么造就了他们这种关系呢？
//一提到共生，互利共生这个词就会冒出来。大部分时候，共生都是伴随着互利而产生的。互相之间能够从对方身上汲取自己所需，从而二者相互依附，谁也离不开谁。要不就是互相之间握有对方把柄，只能持续二者之间利益交换，以期对方能够保守秘密。
//再回到书中，二者其实都是具有很强个人能力的人，离了对方也能够过的不错。同时二人都属于心狠手辣无情，二人所做也都突破了法律底线，可以算是比较豁得出去，简单的把柄好像并无法将二人拿捏。那么是什么维持了二者共生的关系呢？
//二人的童年都可以说是不幸的，这样的不幸也给二人带上了厚厚的面具。他们对外不以真面目见人，始终用虚伪狡诈的演技在世人面前伪装。可能只有童年的图书馆和剪纸才是他们内心最柔软的领地，而在片领地里，也只有他们两人。靠着这点共情，维系着二人的关系。
//那么这样的关系能被成为爱情么。他们没有长久的陪伴，全书二人没有一次对话，同框除了回忆也仅是出现在最后。那么跟传统爱情长相陪伴的模式好像没有关系。但是事实上除了彼此，他们二人对外再无任何感情，不会对任何人敞开心扉，唯一作为正常人的感情都付诸在对方身上，那他们这种关系算是爱情么。