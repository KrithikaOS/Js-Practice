/*Difference between Map Object and normal Object
> Insertion Order
Map Object holds key-value pairs and remembers the original insertion order of the key
normal Object does not remember the insertion order of the key
> Key type
In Map Object, any value (both objects and primitive values) may be used as either a key or a value
In normal Object, only either a String or a Symbol as a key
> Size
In Map Object, the number of items in a Map is easily retrieved from its size property
In normal Object, the number of items in an Object must be determined manually
> Iteration
Map is iterable by default
In normal Object, iterating over an Object requires obtaining its keys in some fashion and iterating over them (i.e, Object.keys() )
>Performance
Map performs better in scenarios involving frequent additions and removals of key-value pairs
normal Object is not optimized for frequent additions and removals of key-value pairs */

let myObj = {
    "foo": "foo",
    "3": "3",
    "1": "1",
    "bar": "bar"
}

let myMap = new Map([
        ["foo", "foo"],
        ["3", "3"]
    ]) // one way of setting map key and values
myMap.set("1", "1") //another way of setting map key and values
myMap.set("bar", "bar")
console.log(myObj); // prints { 1: '1', 3: '3', foo: 'foo', bar: 'bar' }
console.log(myMap); // prints Map { 'foo' => 'foo', '3' => '3', '1' => '1', 'bar' => 'bar' } 


//ways to iterate a map

for (let [key, value] of myMap) {
    console.log(key + ' = ' + value)
}
// foo = foo, 3=3,1=1, bar = bar

for (let key of myMap.keys()) {
    console.log(key)
}
// prints foo, 3, 1, bar

for (let value of myMap.values()) {
    console.log(value)
}
// prints foo, 3, 1, bar
for (let [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value)
}
// prints foo = foo, 3=3,1=1, bar = bar

for (let key of myMap) {
    console.log(key);
    console.log(typeof key);
}
// prints ['foo', 'foo'] , .....
// type of key is object
console.log(typeof myMap)
    //prints type as object

myMap.forEach(function(value, key) {
        console.log(key + ' = ' + value)
    })
    //prints foo = foo, 3=3,1=1, bar = bar 


// Object iteration and finding which takes lesser time.Here we can comment out rest of the methods of iteration while testing one 

const objLoop = () => {
    let obj = {}

    for (let i = 0; i < 10000; i++) {
        let key = String.fromCharCode(65 + i);
        obj[key] = i;
    }

    // for .. in
    for (ele in obj) {
        console.log(ele)
    }

    // Object.keys
    Object.keys(obj).forEach((key) => {
        console.log(key)
    })

    // Object.getOwnPropertyNames
    Object.getOwnPropertyNames(obj).forEach(key => {
        console.log(key)
    })

    // Object.values
    Object.values(obj).forEach((val) => {
        // print value
        console.log(val)
            // print key
            // getKeyByValue(obj, val)
    })

    //function getKeyByValue(object, value){
    //    console.log(Object.keys(object).find(key => object[key] === value))
    //}

    // Object.entries
    Object.entries(obj).forEach((ele) => {
        console.log(ele[0])
    })

}

const t0 = new Date();

objLoop();

const t1 = new Date();

const difference = t1 - t0
console.log(`${difference} ms taken for looping object`)