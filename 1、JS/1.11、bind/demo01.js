


var foo = {
    value: 1
}


function bar(name, age) {
    console.log('==>Get this.value', this.value);
    console.log('==>Get name', name);
    console.log('==>Get age', age);
}


barBind = bar.bind(foo)
// barBind("晚秋时节", 18)
/**
 *   ==>Get this.value 1
 *   ==>Get name 晚秋时节
 *   ==>Get age 18 
 */


new Promise((resolve, reject) => {
    resolve('yyll')
}).then(barBind)