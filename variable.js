// Example of declaring variables with different data types
let userName = "hello"; // string
let age = 24; // number
let a; // undefined
let b = null; // null

// Boolean variable to represent a condition
let isAdult = true; // boolean

// Constructing a user introduction string using concatenation
// This example demonstrates how to concatenate strings and variables to form a new string.
let userIntro = 'hi i am'  + " " + userName +  " " + age;
console.log(userIntro);

// Constant for hours in a day
// This example shows how to declare a constant for a value that does not change.
const hoursInDay = 24;

// Example of using var to declare a variable within a block scope
// This example is not recommended as it can lead to confusion and is generally discouraged.
{var firstName = "hehe"}