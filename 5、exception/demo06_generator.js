function* generator(count) {
    console.log('==>Get count', count);
    const result = yield 5
    console.log('==>Get result', result);
    console.log(result * count);
}


const gen = generator(2)

console.log('==>1', gen.next());
console.log('==>2', gen.next(2));