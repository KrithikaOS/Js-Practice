// ES5-compatible code
var myObject = {
    prop1: 'hello',
    prop2: 'world',
    output: function() {
        console.log(this.prop1 + ' ' + this.prop2);
    }
};

myObject.output();
// ES5 code
var a = 1,
    b = 2,
    c = 3;
obj = {
    a: a,
    b: b,
    c: c
};
// obj.a = 1, obj.b = 2, obj.c = 3

//No repetition anymore

// ES6 code
var
    a = 1,
    b = 2,
    c = 3;
obj = {
    a
    b
    c
};
// obj.a = 1, obj.b = 2, obj.c = 3