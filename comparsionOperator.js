// Comparison operators in JavaScript
// These operators return a boolean value (true or false) based on the comparison.

const user1 = "18"; // string
const user2 = 18; // number

// == (equality) operator performs implicit type conversion
// Example: "18" == 18 returns true because the string "18" is converted to the number 18
console.log(user1 == user2); // Output: true

// === (strict equality) operator checks both value and type
// Example: "18" === 18 returns false because the types (string and number) are different
console.log(user1 === user2); // Output: false

// != (inequality) operator performs implicit type conversion
// Example: "18" != 18 returns false because the string "18" is converted to the number 18
console.log(user1 != user2); // Output: false

// !== (strict inequality) operator checks both value and type
// Example: "18" !== 18 returns true because the types (string and number) are different
console.log(user1 !== user2); // Output: true

// > (greater than) operator
// Example: 20 > 18 returns true
console.log(20 > 18); // Output: true

// < (less than) operator
// Example: 15 < 18 returns true
console.log(15 < 18); // Output: true

// >= (greater than or equal to) operator
// Example: 18 >= 18 returns true
console.log(18 >= 18); // Output: true

// <= (less than or equal to) operator
// Example: 15 <= 18 returns true
console.log(15 <= 18); // Output: true
