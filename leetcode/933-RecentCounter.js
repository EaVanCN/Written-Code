var RecentCounter = function() {
    this.pingTimes = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.pingTimes.push(t);
    this.pingTimes = this.pingTimes.filter(item=>{
        return t-item <= 3000
    })
    return this.pingTimes.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */