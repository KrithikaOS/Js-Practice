var parentB = document.querySelector('#parentBubble');
// Add click event on parent div 
parentB.addEventListener('click', function() {
    console.log("Parent clicked");
});

var childB = document.querySelector('#childBubble');
//Add click event on child button 
childB.addEventListener('click', function() {
    console.log("Child clicked");
});

var parentC = document.querySelector('#parentCapture');
// Add click event on parent div 
parentC.addEventListener('click', function() {
    console.log("Parent clicked");
}, true); // true is a boolean value to specify is event should be captured or not - Note: true is specified in parent and not child

var childC = document.querySelector('#childCapture');
//Add click event on child button 
childC.addEventListener('click', function() {
    console.log("Child clicked");
});