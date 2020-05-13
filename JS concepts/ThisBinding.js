//common function 
function foo() {
    var a = 9;
    console.log(this.a); // prints 10 or undefined(in strict mode) - this is a global object here
}

//Default Binding 
var a = 10;
foo();

//Explicit binding - using call or apply
var obj = {
    a: 18,
}
foo.call(obj); //prints 18

//Implicit Binding

var obj2 = {
    a: "aye",
    foo: foo
}
obj2.foo(); //prints aye

//New binding - using new()

var bar = new foo("IAm new foo");
console.log(bar); //prints foo{} - a new object gets created

//this for arrow function 

var foo2 = () => console.log("value is " + this.a);
foo2(); // 10 or undefined
foo2.call(obj); // 10 or undefined
var bar2 = new foo2("I am new foo"); // error foo2 is not a constructor