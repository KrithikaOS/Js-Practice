//A module usually contains a class or a library of functions.
// Modules are always executed in 'use-strict' mode 
export
default class User { //generally class is set to default export 
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}

export function sayBye(user) {
    alert(`Bye, ${user}!`);
}