//f(a,b,c) = h(a)(b)(c)

function add(a) { //manual currying
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}


let addTwo = add(2);
let addThree = addTwo(3); //Now if we want to add any other 2 numbers with addTwo or one other num with AddThree it is possible by just calling the function which takes the rest of the arguments
let sum = addThree(8);
console.log(sum, addThree, addTwo);

//currying from lodash libarary
function addAB(a, b) {
    return a + b;
}

// let curriedSum = _.curry(addAB); // using _.curry from lodash library

// console.log(curriedSum(1, 2)); // 3, still callable normally
// console.log(curriedSum(1)(2));
//advanced curry implementation

function curry(func) { //this example is from internet

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

function addABC(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(addABC);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying