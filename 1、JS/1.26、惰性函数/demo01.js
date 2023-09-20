


var foo = function (type) {
    if (type === 'person') {
        foo = function (name) {
            this.name = name
        }
    } else {
        foo = function (name, age) {
            this.age = age
            this.name = name
        }
    }
}


// foo('person')

// var f = new foo('111', 111)
// console.log(f.name); //* 111
// console.log(f.age);  //* undefined


foo('')

var f1 = new foo('111', 111)
console.log(f1.name);   //* 111
console.log(f1.age);    //* 111

