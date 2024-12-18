// Using a ternary operator to assign "TRUE" to value if the condition is true, otherwise "FALSE"
const value = true ? "TRUE" : "FALSE";
console.log(value); // Output: TRUE

// Using a ternary operator to assign "JOHN" to userName if 5 is greater than 2, otherwise "JANE"
const userName = 5 > 2 ? "JOHN" : "JANE";

// Using a ternary operator to assign "she" to userGender if gender is "f", otherwise "he"
const gender = "f";
const userGender = `${gender === "f" ? "she" : "he"} is a college student`;

// Chaining ternary operators
// The first condition (0) is false, so it evaluates the second ternary operator
// The second condition ("JANE") is truthy, so it assigns "12" to result
const result = 0 ? 'JOHN' : "JANE" ? "12" : 2;