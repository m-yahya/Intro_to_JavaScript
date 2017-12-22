// Module: SML, Muhammad Yahya, Supervisor: Prof.Dr. Franz-Josef Behr
/ built-in function
var myString = 'built in functions performs useful things without writing the full piece of code'
var newString = myString.replace('things', 'actions')
console.log(newString);
// invoking functions
function invokingFunc(){
  alert('You have invoked the function!');
}
invokingFunc()
//anonymous function
var anonFunc = function () {
  alert('anonymous functions does not have a name');
}
console.log(anonFunc());
// named function
function sum(x,y) {
  return x+y;
}
console.log(sum(4,5));
