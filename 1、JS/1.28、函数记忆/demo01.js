var memoize = function (func, hasher) {
    var memoize = function (key) {
        console.log('==Get key', key);
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        console.log('==Get address', address);
        if (!cache[address]) {
            console.log('执行11');
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};


var add = function (a, b, c) {
    return a + b + c
}

// var memoizedAdd = memoize(add)
// console.log(memoizedAdd(1, 2, 3));  // 6
// console.log(memoizedAdd(1, 2, 4));  // 6



function hasher() {
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
}


var memoizedAdd1 = memoize(add, hasher)

console.log(memoizedAdd1(1, 2, 3));  // 6
console.log(memoizedAdd1(1, 2, 4));  // 7