// Module: SML, Muhammad Yahya, Supervisor: Prof.Dr. Franz-Josef Behr
// accessing button from html document
var button = document.querySelector('button');
// assigning function to button
button.onclick = function () {
  var name = prompt('Please enter your name: ');
  alert('Hi ' + name + ', welcome to learn JavaScript!');
}
