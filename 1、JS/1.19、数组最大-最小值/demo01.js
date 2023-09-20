
console.log(Math.max(true, 0)); // 1
console.log(Math.max(false, 1));    // 1
console.log(Math.max(false, 2, null));  // 2
console.log(Math.max(1, undefined));    // NAN
console.log(Math.max(1, {}));   // NAN

//* 如有任一参数不被转为数值 结果为NAN

var max = Math.max()
var min = Math.min()
console.log('max,min', max, min);   // -Infinity Infinity
console.log('大小==>', min > max);  // true

console.log('==========> Apply');
var arr = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max.apply(null, arr)); // 23

console.log('==========> ES6');
console.log(Math.min(...arr));  // 1