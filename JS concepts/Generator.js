// Generators are special functions that can have a control over our iterations

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
console.log(generator); // { [Iterator]}

let one = generator.next();

console.log(one); //{value:1, done:false}
console.log(generator.next()); //{value:2, done:false}
console.log(generator.next()); //{value:3, done:true} //done becomes true only if there is no more value to yield