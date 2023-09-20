


function test1() {
    return function () {
        console.log(111);
    }
}


function test2() {
    return function demo() {
        console.log(222);
    }
}



a1 = test1()
console.log('==>Get a1', a1);
console.log('==>Get a1.name', a1.name);

a2 = test2()
console.log('==>Get a2', a2);
console.log('==>Get a2.name', a2.name);