//Напишите класс, который позволяет получать и устанавливать пары ключ-значение, однако с каждым ключом связано время до истечения срока действия.

// Класс имеет три открытых метода.:

// set (ключ, значение, длительность): принимает целочисленный ключ, целочисленное значение и длительность в миллисекундах. По истечении срока ключ должен быть недоступен. Метод должен возвращать значение true, если тот же ключ без истечения срока действия уже существует, и значение false в противном случае. И значение, и длительность должны быть перезаписаны, если ключ уже существует.

// get(ключ): если существует ключ с истекшим сроком действия, он должен возвращать соответствующее значение. В противном случае он должен возвращать -1.

// count(): возвращает количество ключей с истекшим сроком действия.

var TimeLimitedCache = function() {
    this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    if (this.cache.has(key)) {
        this.cache.set(key, [value, now + duration]);
        return true;
    }
    this.cache.set(key, [value, now + duration]);
    return false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    if (this.cache.has(key)) {
        const [value, expiry] = this.cache.get(key);
        if (now < expiry) {
            return value;
        } else {
            this.cache.delete(key);
        }
    }
    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;
    for (const [key, [_, expiry]] of this.cache) {
        if (now < expiry) {
            count++;
        } else {
            this.cache.delete(key);
        }
    }
    return count;
};


 const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

console.log("**")
console.log(timeLimitedCache.set(1, 42, 1000)); // true
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

