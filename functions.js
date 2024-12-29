// Function to introduce with optional parameter and default value
function introduceMe(a = 5, b) {
  console.log("hello");
  return a + b;
}
// Calling the function with arguments
introduceMe(5, 3);

// Function to add two numbers
function addTwoNumbers(a, b) {
  return a + b;
}
// Assigning the result of the function to a variable
const result = addTwoNumbers(5, 6);
// Another way to call the function with calculated values
const results = addTwoNumbers(5 + 6, 6 + 5);
// Nesting function calls to calculate the result
const resultss = addTwoNumbers(addTwoNumbers(4, 6), addTwoNumbers(8, 12));
// Logging the result to the console
console.log(result);
//   execution context - memory creatiion phase  + code execution phase 