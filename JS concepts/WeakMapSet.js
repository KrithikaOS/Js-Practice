/* What is the need ? If an object is set as the key to a map and later if the object is made null, it is not garbage collected
as its reference is still present in map key. This can increase the load of the map if the key-value increases.*/

let user = { name: "John" };
let array = [user];
let map = new Map();
map.set(user, "...");
user = null; // User is still stored inside set and map
console.log(map.keys());

/* A weak map can have only objects as their keys and if we use an object as the key in it, and there are no other references to that object
 – it will be removed from memory (and from the map) automatically. */
let user2 = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(user2, "john's details");
user2 = null;
console.log(weakMap.has(user2));
/* A use case - incase if John is a user and if he leaves the company or some frequent visiting place, his details are
no more required. So, weak map takes care of deleting his details automatically */

/* Another use case- caching 
when a function result should be remembered (“cached”), so that future calls on the same object reuse it. */


let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
    if (!cache.has(obj)) {
        let result = /* calculate the result for */ obj;

        cache.set(obj, result);
    }

    return cache.get(obj);
}

let obj = { /* some object */ };

let result1 = process(obj);
let result2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well


/* WEAKSET 

It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
Being “weak”, it also serves as an additional storage. But not for an arbitrary data,
 but rather for “yes/no” facts. A membership in WeakSet may mean something about the object.*/

let visitedSet = new WeakSet();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(john)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically