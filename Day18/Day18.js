/*******************Number ProtoTyping***************/


// We can declare a number as an object using new keyword

let a = 100;
let b = new Number(100);

// Number() is the constructor

console.log(a);
console.log(b);

// Output is
// 100 
// [Number: 100] 

console.log(typeof a); // output is number
console.log(typeof b); // output is object



// toFixed() method is used to fix the precision (numbers in decimal places)

// Syntax
// console.log(number.toFixed(a Number))

let c = 9087.87687674978528;

let d = c.toFixed(3); // this means 3 numbers are allowed after decimal

console.log(d); // output is 9087.877




// toString() method is used to convert a number into a string

let e = 800;
let f = e.toString();

console.log(typeof f); // output is string

// now we can implement all the string prototyping methods on f

