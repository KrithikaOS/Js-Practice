/*
Static methods are used for the functionality 
that belongs to the class “as a whole”. It doesn’t relate to a concrete class instance.
*/

class Book {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}
// usage
let books = [
    new Book("If Tmw comes", new Date(2019, 1, 1)),
    new Book("Bloodline", new Date(2019, 0, 1)),
    new Book("The Sky is falling", new Date(2019, 11, 1))
];
books.sort(Book.compare); // compare method can be directly called by ClassName.method 

console.log(books[0].title); // prints Bloodline



class Animal {
    static planet = "Earth";

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`); // Black Rabbit runs with speed 5
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }

}

// Inherit from Animal
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

console.log(Rabbit.planet); // Earth

// for statics
console.log(Rabbit.__proto__ === Animal); // true

// for regular methods
console.log(Rabbit.prototype.__proto__ === Animal.prototype); //true