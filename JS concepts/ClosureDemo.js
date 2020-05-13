/*A closure is the combination of a function and the lexical environment 
within which that function was declared. This environment consists of any local variables 
that were in-scope at the time the closure was created. */

//Lexical Scoping
function init() {
    var name = 'Krithika'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init(); //Krithika

//Closure

function makeFunc() {
    var name = 'Krithika';

    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc(); //works same as lexical scoping - though name is a local variable , it is still accessible by myFunc
myFunc();

/*Running this code has exactly the same effect as the previous example of the init() function above. 
What's different (and interesting) is that the displayName() 
inner function is returned from the outer function before being executed. */

//Another example of closures

function outer() {
    var b = 10;
    var c = 100;

    function inner() {

        var a = 20;
        console.log("a= " + a + " b= " + b);
        a++;
        b++;
    }
    return inner;
}
var X = outer(); // outer() invoked the first time
var Y = outer(); // outer() invoked the second time
//end of outer() function executions
X(); //a=20,b=10 
X(); // a=20,b=11
X(); //a=20,b=12
Y(); //a=20,b=10