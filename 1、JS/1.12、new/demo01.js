


function Person(name) {
    this.name = name


    return {
        name: name,
        age: 18,
        sex: '男'
    }
}

Person.prototype.getName = function () {
    return this.name
}

var p = new Person("11")

console.log(p.name);    // 11
// console.log(p.getName());   // 11



function Person1(name) {
    this.name = name


    return {
        age: 18,
        sex: '男'
    }
}

var p1 = new Person1("111")
console.log(p1.name);    // undefined
console.log(p1.age);    // 11
console.log(p1.sex);    // 11




console.log('===============');
function Person2(name) {
    this.name = name
    return 18
}

var p2 = new Person2("111")
console.log(p2.name);    // 111
console.log(p2.age);    // undefined
console.log(p2.sex);    // undefined