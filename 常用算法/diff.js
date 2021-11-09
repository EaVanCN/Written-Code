/**
 * @param {number[]} oldCh
 * @param {number[]} newCh
 * @return {void}
 * 
 */
 var diff = function(oldCh, newCh) {
    let oldSIdx = 0, newSIdx = 0;
    let oldSnode = oldCh[0];
    let newSnode = newCh[0];
    let oldEIdx = oldCh.length - 1;
    let oldEnode = oldCh[oldEIdx];
    let newEIdx = newCh.length - 1;
    let newEnode = newCh[newEIdx];
    while (oldSIdx <= oldEIdx && newSIdx <= newEIdx){
        if(!oldSnode){
            oldSnode = oldCh[++oldSIdx];
        }else if(!oldEnode){
            oldEnode = oldCh[--oldEIdx];
        }else if(!newSnode){
            newSnode = newCh[++newSIdx];
        }else if(!newEnode){
            newEnode = newCh[--newEIdx];
        }else if(oldSnode == newSnode){
            oldSnode = oldCh[++oldSIdx];
            newSnode = newCh[++newSIdx];
        }else if(oldEnode == newEnode){
            oldEnode = oldCh[--oldEIdx];
            newEnode = newCh[--newEIdx];
        }else if(oldSnode == newEnode){     //数组下标的原因，为了让插入删除操作后指针位置正确，其实做了很多错误的指向，不太好理解。
            insertHandler(oldCh, oldEIdx, oldSIdx, 'after')
            console.log(oldSnode + ' move to index ' + newEIdx)
            oldSnode = oldCh[++oldSIdx];
            oldEnode = oldCh[oldEIdx];
            newEnode = newCh[--newEIdx];
        }else if(oldEnode == newSnode){   
            insertHandler(oldCh, oldSIdx, oldEIdx, 'before')
            console.log(oldEnode + ' move to index ' + newSIdx)
            oldSnode = oldCh[++oldSIdx];
            oldEnode = oldCh[oldEIdx];
            newSnode = newCh[++newSIdx];
        }else{      //首尾不存在相同node,遍历新数组，需要从旧数组中间找值插入头部
            let oldKeyToIdx = creatValIndexMap(oldCh, oldSIdx, oldEIdx);
            let newNodeIndexInOldCh = oldKeyToIdx[newSnode]
            if(newNodeIndexInOldCh >= 0){    //招到了，将该节点插入最前面
                insertHandler(oldCh, oldSIdx, newNodeIndexInOldCh, 'before')
                console.log(newSnode + ' move to index ' + oldSIdx)
                oldSnode = oldCh[++oldSIdx];
                oldEnode = oldCh[oldEIdx];
                newSnode = newCh[++newSIdx];
            }else{          //没找到，创建节点插入最前面
                insertHandler(oldCh, oldSIdx, newSnode, 'creat')
                console.log('creat node ' + newSnode +  ' insert to index ' + oldSIdx)
                oldSnode = oldCh[++oldSIdx];
                oldEnode = oldCh[++oldEIdx];
                newSnode = newCh[++newSIdx];
            }
        }
    }
     //跳出循环之后判断是旧数组有值还是新数组有值
     if(oldSIdx <= oldEIdx){ //旧数组有值，删去旧数组的值;
        let deletedNode = oldCh.splice(oldSIdx, oldEIdx-oldSIdx+1);
        for(let i = 0; i< deletedNode.length; i++){
            console.log(deletedNode[i] + ' removed')
        }
    }else{      //新数组有值，根据位置把node插入旧数组,因为数组下标的特殊性，应该不可能进入这种情况
        let insertNode = newCh.slice(newSIdx, newEIdx+1);
        oldCh.splice(newSIdx, 0, ...insertNode);
        for(let i = 0; i< insertNode.length; i++){
            console.log('creat node ' + insertNode[i] + ' insert to index ' + (newSIdx+i))
        }
    }
    return oldCh
};
const creatValIndexMap = function(oldCh, oldSIdx, oldEIdx){
    let map = {};
    for(let i = oldSIdx; i<=oldEIdx; i++){
        map[oldCh[i]] = i;
    }
    return map
}

/**
 * @param {number[]} ch       被操作的数组
 * @param {number} index      被操作的位置
 * @param {number} indexOrVal 被插入值的位置或者具体值，取决于调用的时候是否插入的是该数组的原值
 * @param {string} order      标识插入类型，有：before, after, creat, delete
 * @return {void}
 */
 const insertHandler = function(ch, index, indexOrVal ,order){
    switch(order){
        case 'before':
            ch.splice(index, 0, ch.splice(indexOrVal, 1)[0]);
            break;
        case 'after':
            ch.splice(index+1, 0, ch.splice(indexOrVal, 1)[0]);
            break;
        case 'creat':
            ch.splice(index, 0, indexOrVal);
            break;
        case 'delete':
            ch.splice(index, 1);
            break;
    }
}

console.log(diff([1,2,3,4,5], [5,1,5,4,6,6,6]))

/***
 * 
 * https://blog.csdn.net/weixin_39929465/article/details/111213815
 * https://www.cnblogs.com/tugenhua0707/p/11762585.html
 * 
 */

