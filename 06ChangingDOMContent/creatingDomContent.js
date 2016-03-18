// step 1 creates a element node of <li> in javascript virtual environment 
var myNewElement = document.createElement("li");  

// step 2 creates a text node for <li> in the virtual environment
var myText = document.createTextNode("New list item text");

// step 3 associates the element node with its text node.
myNewElement.appendChild(myText);

// step 4 creates the element in the DOM
document.getElementById("options").appendChild(myNewElement);

// step 5 If we want to append the element at a different point in a list
 