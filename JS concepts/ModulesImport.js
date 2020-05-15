import { sayHi } from './ModulesDemo.js';
import User from './ModulesDemo'; // If class or function is default exported, then it need not be enclosed by curly braces

console.log(sayHi); // function...
sayHi('John'); // Hello, John!
let employee = new User("Bob", "Marley");

/* Please note that import/export statements don’t work if inside {...}.

A conditional import, like this, won’t work */

if (something) {
    import { sayHi } from "./say.js"; // Error: import must be at top level
}

//Dynamic imports

/*The import(module) expression loads the module and returns a promise that resolves into a module object 
that contains all its exports. It can be called from any place in the code.*/

/* let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>) 
  
    (or)
  let module = await import(modulePath);
  
  */

let { hi, bye } = await
import ('./ModulesDemo.js');

hi();
bye();


/* Note: Dynamic imports work in regular scripts, they don’t require script type="module". */

/* Note: Although import() looks like a function call, 
it’s a special syntax that just happens to use parentheses (similar to super()).
So we can’t copy import to a variable or use call/apply with it. It’s not a function.*/