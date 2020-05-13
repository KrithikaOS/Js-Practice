var user = {
    firstname: 'Krith',
    lastname: 'Org ',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var name = function(food, hobby) {
    //console.log(this.getFullName() + 'is my name');
    console.log(`${this.getFullName()} likes to eat ${food} and hobby is ${hobby}`);
};

var bindNewUser = name.bind(user); // creates new object and binds user. 'this' of user === user now

//After we bind() a value we can use the function just like it was any other normal function.

bindNewUser("panipuri", "singing"); // prints Krit org likes to eat panipuri and hobby is singing
bindNewUser(["panipuri", "singing"]); //Prints krith org likes to eat panipuri,singing and hobby is undefined

var callNewUser = name.call(user, "samosa", "dancing"); // prints Krit org likes to eat samosa and hobby is dancing
var callNewUser = name.call(user, ["samosa", "dancing"]); /// prints Krit org likes to eat samosa,dancing and hobby is undefined
// callNewUser("samosa","dancing"); error as callNewUser is not a function 

var applyNewUser = name.apply(user, ["panipuri", "dancing"]); // prints Krit org likes to eat panipuri and hobby is dancing

/*Difference between call apply and bind 
The main differences between bind() and call() is that the call() method:
Accepts additional parameters as well
Executes the function it was called upon right away.
The call() method does not make a copy of the function it is being called on.  

call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, 
whereas apply() expects an array of all of our parameters.

*/