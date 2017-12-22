// Module: SML, Muhammad Yahya, Supervisor: Prof.Dr. Franz-Josef Behr
//converting string to array
var myString = 'this is my string that will be converted into an array';
var myArray = myString.split(' ');
console.log(myArray);
// length of array
console.log(myArray.length);
// retrieve item at a specific position
//access first item
console.log(myArray[0]);
// adding a new item at a specific position
myArray[0] = 'newItem';
// access last item
console.log(myArray[myArray.length-1]);
// adding new item at the end
myArray.push('addItem');
// removing item from the end
myArray.pop();
// adding item in the start
myArray.unshift('firstItem');
// removing first addItem
myArray.shift();
// reverse the arrayMethods
myArray.reverse();
myArray.sort();
// remove item from a specific position
// position from where to start, number of items to remove
myArray.splice(2, 1);
// create a new arrayMethods
var newArray = myArray.slice();
// finding the position of an item
// zero is the index position from where we want to start search
myArray.indexOf('an', 0);
