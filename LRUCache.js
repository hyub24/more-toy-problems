/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.queue = Array(capacity);
    this.cache = {};
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache[key] === undefined) return -1;
    if (this.queue.includes(key)) this.queue.splice(this.queue.indexOf(key), 1);
    this.queue.push(key);
    if (this.queue.length > this.capacity) {
        this.queue.shift();
    }
    return this.cache[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.queue.includes(key)) this.queue.splice(this.queue.indexOf(key), 1);
    this.queue.push(key);
    if (this.queue.length > this.capacity) {
        if (this.cache[key] === undefined) {
            delete this.cache[this.queue.shift()];
        }
        else this.queue.shift();
    }
    this.cache[key] = value;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 