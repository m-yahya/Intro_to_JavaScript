// Module: SML, Muhammad Yahya, Supervisor: Prof.Dr. Franz-Josef Behr
var button = document.querySelector('button');
button.onmouseover = function () {
  var name = prompt('Please enter your name: ');
  alert('Hi ' + name);
}
