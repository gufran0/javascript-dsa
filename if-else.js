// Prompt the user to enter their name
const userName = prompt("please enter your name");

// Prompt the user to enter their age and convert it to an integer
// If the user does not enter a valid age, default to 23
const userAge = parseInt(prompt("please enter your age")) || 23;

// Prompt the user to enter their gender
const gender = prompt("write gender");

// Log the user's name to the console
console.log(`NAME : ${userName}`);

// Check if the user's age is between 18 and 29 inclusive
if (userAge >= 18 && userAge <= 29) {
  // If the condition is true, log the user's name, gender, and age to the console
  console.log(`NAME : ${userName} gender : ${gender} age: ${userAge}`);
}

// Example: If userAge is 20, the output will be:
// NAME : [userName] gender : [gender] age: 20

// Example: If userAge is 30, there will be no output from the if block

// If we want to print one line, we can remove the braces
// It runs only if the condition is true
