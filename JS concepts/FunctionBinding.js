//Losing 'this'
let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi, 1000); // prints Hello, undefined! as the context is lost . Here inside settimeout, it looks for this=window object
// 1st solution - wrapping function

setTimeout(function() {
    user.sayHi(); // Hello, John!
}, 1000);
// shorter syntax using arrows
setTimeout(() => user.sayHi(), 1000); // Hello, John!

/*There is a problem if the value of the user's firstname changes before settTimeout gets executed . It takes
the newly allocated value*/
//2nd solution - bind - calling boundFunction is like func with fixed this.

let sayHi = user.sayHi.bind(user);
sayHi(); // prints hello john
setTimeout(sayHi, 1000); // prints hello john
user = {
    sayHi() { console.log("Another user in setTimeout!"); }
};

//To bindAll

for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}

//bind can also be used to create partial functions similar to currying
function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2); // syntax function.bind(context, arg1,arg2.....) - since context is not needed , we have given 'null'
// let double = mul.bind(this,2) //works the same way
console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10


/* Real time use of partial function -  we have a function send(from, to, text). Then, inside a 
user object we may want to use a partial variant of it: sendTo(to, text) that sends from the current user.*/


// solution 3 - Going partial without context

function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args); //using spread operator
    }
}

// Usage:
let userNew = {
    firstName: "John",
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

// add a partial method with fixed time
userNew.sayNow = partial(userNew.say, new Date().getHours() + ':' + new Date().getMinutes());

userNew.sayNow("Hello");