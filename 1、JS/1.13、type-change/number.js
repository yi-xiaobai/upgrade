
console.log(Number()) // +0

console.log(Number("undefined"));   // NAN
console.log(Number("null"));

console.log(Number(true));  // 1
console.log(Number(false)); // 0



console.log(Number("123")) // 123
console.log(Number("-123")) // -123
console.log(Number("1.2")) // 1.2
console.log(Number("000123")) // 123
console.log(Number("-000123")) // -123


// 十六进制
console.log(Number("0x11")) // 17


console.log(Number("")) // 0
console.log(Number(" ")) // 0

console.log(Number("123 123")) // NaN
console.log(Number("foo")) // NaN
console.log(Number("100a")) // NaN