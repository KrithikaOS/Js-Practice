//Use-case 1: splitting CPU-hungry tasks
//case 1
let i = 0;

let start = Date.now();

function count1() {

    // do a heavy job
    for (let j = 0; j < 1e9; j++) {
        i++;
    }

    console.log(" count 1 Done in " + (Date.now() - start) + 'ms');
}

count1();

//case 2

i = 0;

start = Date.now();

function count2() {

    // do a piece of the heavy job (*)
    do {
        i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
        console.log(" count 2 Done in " + (Date.now() - start) + 'ms');
    } else {
        setTimeout(count2); // schedule the new call (**)
    }

}

count2();

//case 3

i = 0;
start = Date.now();

function count3() {

    // move the scheduling to the beginning
    if (i < 1e9 - 1e6) {
        setTimeout(count3); // schedule the new call
    }

    do {
        i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
        console.log(" count3 Done in " + (Date.now() - start) + 'ms');
    }

}

count3();

//Use case 2: progress indication

function count4() {
    for (let i = 0; i < 1e6; i++) {
        i++;
        document.getElementById("count4").innerHTML = i;
    }
}

count4();

/*But we also may want to show something during the task, e.g. a progress bar.

If we split the heavy task into pieces using setTimeout, then changes are painted out in-between them.*/

i = 0;

function count5() {

    // do a piece of the heavy job (*)
    do {
        i++;
        document.getElementById("count5").innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e7) {
        setTimeout(count5);
    }

}

count5();

//Use case 3: doing something after the event

// menu.onclick = function() {
//     // ...

//     // create a custom event with the clicked menu item data
//     let customEvent = new CustomEvent("menu-open", {
//       bubbles: true
//     });

//     // dispatch the custom event asynchronously
//     setTimeout(() => menu.dispatchEvent(customEvent));
//   };

//Micro task and macro task

setTimeout(() => alert("timeout")); //gets executed at last as its a macro task

Promise.resolve()
    .then(() => alert("promise")); //gets executed second as its considered as a micro task

alert("code"); //gets executed first
//All microtasks are completed before any other event handling or rendering or any other macrotask takes place.


i = 0;

function count6() {

    // do a piece of the heavy job (*)
    do {
        i++;
        document.getElementById("count6").innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e6) {
        queueMicrotask(count6);
    }

}

count6();