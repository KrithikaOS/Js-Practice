/*Delegation is a technique where an object expresses certain behavior to the outside 
but in reality delegates responsibility for implementing that behaviour to an associated object. */

// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
    // e.target is the clicked element!
    // If it was a list item
    if (e.target && e.target.nodeName == "LI") {
        // List item found  Output the ID
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
    }
});

/* Instead of writing separate event listener for each of the Items , 
we add a listener to its parent and respond according to the target clicked.
 But from outside it looks as though each item was handled separately*/