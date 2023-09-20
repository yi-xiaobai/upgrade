var data = []

for (var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    }
}

console.log('==>Get i', i); // 3
console.log('==>Get data', data.length);    // 3
data[0]()   // 3
data[1]()   // 3
data[2]()   // 3



console.log('=================');
// 闭包版本
var data1 = []
for (var i = 0; i < 3; i++) {
    data[i] = (function () {
        console.log(i);
    })(i)
}

console.log('==>Get i', i); // 3
console.log('==>Get data', data.length);    // 3
data[0]   // 0
data[1]   // 1
data[2]   // 3





// var res = []
// for (let i = 0; i < 3; i++) {
//     res[i] = function () {
//         console.log(i);
//     }
// }
// console.log('==>Get i', i); // 3
// console.log('==>Get res', res.length);    // 3
// res[0]()   // 0
// res[1]()   // 1
// res[2]()   // 2