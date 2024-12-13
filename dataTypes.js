// Example of declaring variables with different data types
let a = 5; // number
let b = "hello"; // string
let c = true; // boolean
let d; // undefined
let e = BigInt(5); // BigInt
let f = Symbol(a); // Symbol

// Using typeof to check the type of a variable
console.log(typeof a); // Output: number

// Converting a number to a string
let g = 100;
console.log(g.toString()); // Output: "100"
console.log(String(g)); // Output: "100"
console.log(g + ""); // Output: "100"

// Converting a string to a number
let h = "100";
console.log(+"100"); // Output: 100
console.log(parseInt("100aaddd")); // Output: 100

// Converting a boolean to a number
console.log(+false); // Output: 0

// Checking the type of NaN and null
console.log(typeof NaN); // Output: number
console.log(typeof null); // Output: object
// null is converted to 0 when treated as a number - +null
// undefined is converted to NaN when treated as a number - +undefined

// JavaScript automatically assigns undefined, but null is explicitly set by the developer
