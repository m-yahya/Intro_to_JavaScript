// Module: SML, Muhammad Yahya, Supervisor: Prof.Dr. Franz-Josef Behr
// defining a function to add dom element
function addDOMElements () {
  // accessing existing dom element and storing them in variables
  var elementType = document.getElementById("elementType");
  // accessing contents from input
  var elementContent = document.getElementById("elementContent");
  var type = elementType.options[elementType.selectedIndex].value;
  var Element = document.createElement(type);
  if (type != "HR") {
    // accessing text nodes and appending to elements
    var Text = document.createTextNode(elementContent.value);
    Element.appendChild(Text);
  }
  // appending elements to body
  document.getElementById("container").appendChild(Element);
}
