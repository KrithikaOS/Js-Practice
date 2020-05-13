//destructuring 
// Destructuring arrays
let fullName = ["krith", "org"];
// To extract first name aand last name
let [fName, lName] = fullName;
console.log(fName, lName);
// let [fName,lName] = "krith org".split(' ');

//To ignore some variables
fullName = ["krith", "sundar", "org"];
let [fname, , lname] = fullName;
console.log(fname, lname);

//right side need not be an array always
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
console.log(a, b, c, one, two, three);


//Destructruing and allocating to object
let user = {};
[user.name, user.surname] = "Krith org".split(' ');

console.log(user.name);

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;
//let {title, ...rest} = options; works same as the obove

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200


let title1, width1, height1;

// okay now
({ title1, width1, height1 } = { title1: "Menu", width1: 200, height1: 100 });

console.log(title1); // prints Menu

//Nested Destructuring 

let optionsAvailable = {
    size: {
        width2: 100,
        height2: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
    size: { // put size here
        width2,
        height2
    },
    items: [item1, item2], // assign items here
    title2 = "Menu" // not present in the object (default value is used)
} = optionsAvailable;

console.log(title2); // Menu
console.log(width2); // 100
console.log(height2); // 200
console.log(item1); // Cake
console.log(item2); // Donut

//Instead of passing the whole object and calling as object.property everytime, destructuring is a smart way to carry out the operation
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log(`${title} ${width} ${height}`); // My Menu 200 100
    console.log(items); // Item1, Item2
}

showMenu(options);