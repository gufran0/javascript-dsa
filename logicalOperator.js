// Start of Selection
// Logical AND (&&) operator example
// The AND operator returns true if both operands are true, otherwise false.

const example1 = 5 > 7 && 8 > 4; // false, because 5 > 7 is false
const example2 = 5 > 7 && 8 < 4; // false, both comparisons are false

// Example with user age
const userAge = 15;

// Check if the user is a school student (age between 5 and 18 inclusive)
const isSchoolStudent = userAge >= 5 && userAge <= 18;
console.log(isSchoolStudent); // true, because 15 is between 5 and 18

// Check if the user is a college student (age between 18 and 24 inclusive)
const isCollegeStudent = userAge >= 18 && userAge <= 24;
console.log(isCollegeStudent); // false, because 15 is not between 18 and 24

// Logical OR (||) operator example
// The OR operator returns true if at least one operand is true.
const isStudent = isSchoolStudent || isCollegeStudent;
console.log(isStudent); // true, because isSchoolStudent is true

// Demonstrating truthy and falsy values with logical operators
const result1 = 0 && 2; // 0, because 0 is a falsy value
const result2 = 0 || 2; // 2, because 2 is a truthy value

// Using Boolean to convert to true or false
const booleanResult = Boolean(0 && 2); // false, because 0 is falsy

// Example with non-boolean values
const andResult = "hello" && console.log("hello"); // logs "hello", returns undefined

const checking = "" && "hello"; // "", because "" is a falsy value

// Bitwise AND and OR operators
const bitwiseAnd = 2 & 4; // 0, bitwise AND operation
const bitwiseOr = 2 | 4; // 6, bitwise OR operation

// Logical NOT (!) operator example
const notNull = !null; // true, because ! reverses the falsy value null

const doublenUll = !!null;
// it reveres the value back
