// Prompt the user to enter their name and store it in userName
const userName = prompt("Please enter your name");

// Prompt the user to enter their age, convert it to an integer, and store it in userAge
// If the user does not enter a valid age, default to 23
const userAge = parseInt(prompt("Please enter your age")) || 23;

// Prompt the user to enter their gender and store it in gender
const gender = prompt("Please enter your gender");

// Log the user's name to the console
console.log(`NAME: ${userName}`);

// Check if the user's age is between 18 and 29 inclusive
if (userAge >= 18 && userAge <= 29) {
  // If the condition is true, log the user's name, gender, and age to the console
  console.log(`NAME: ${userName}, GENDER: ${gender}, AGE: ${userAge}`);
}

// Example: If userAge is 20, the output will be:
// NAME: [userName], GENDER: [gender], AGE: 20

// Example: If userAge is 30, there will be no output from the if block

// Note: The if block executes only if the condition is true
