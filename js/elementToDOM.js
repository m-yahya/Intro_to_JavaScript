// Module: SML, Muhammad Yahya, Supervisor: Prof.Dr. Franz-Josef Behr
// create a new div element
var newDiv = document.createElement("div");
// create a new text node
var text = document.createTextNode("This is the element inserted in HTML document!");
// add the text node to the div element
newDiv.appendChild(text);
// add the element and its content to the DOM
var firstDiv = document.getElementById("new-div");
document.body.insertBefore(newDiv, firstDiv);
