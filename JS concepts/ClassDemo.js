// Without class - using constructor function and prototypical inheritance
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

function Employee(firstName, lastName, employeeCode) {
    Person.call(this, firstName, lastName);
    this.employeeCode = employeeCode;
}
Employee.prototype = Object.create(Person.prototype);
console.log(Employee.prototype); // Person {}
console.log(new Person("bob", "marley").fullName()); // bob marley
console.log(new Employee("krith", "org", 007).fullName()); //krith org

// Using class - clean syntax and easily understandable 


class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static staticMethod() { //optional if necessary 
    }
}



class Employer extends Human {
    constructor(firstName, lastName, employeeCode) {
        super(firstName, lastName);
        this.employeeCode = employeeCode;
    }
}

console.log(new Human("bob", "marley").fullName()); // bob marley
console.log(new Employer("krith", "org", 007).fullName()); // krith org