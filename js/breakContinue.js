// Module: SML, Muhammad Yahya, Supervisor: Prof.Dr. Franz-Josef Behr
// break statement
for (i = 0; i < 10; i++) {
    if (i === 5) { break; }
    console.log(i);
}
console.log('This is the statement outside the loop after break!');
// continue statement
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log(i);
}
console.log('This is the statement outside the loop after continue!');
