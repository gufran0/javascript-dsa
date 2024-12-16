// Start of Selection
const userName = "JohnDoe";
const trimmedString = "               Hello World      ";

// Accessing a character in a string using square brackets
// Example: Accessing the first character of the string 'userName'
console.log(`First character of 'userName': ${userName[0]}`); // Output: "J"

// Accessing the length property of a string
// Example: Getting the number of characters in 'userName'
console.log(`Length of 'userName': ${userName.length}`); // Output: 7

// Using string methods to modify the case of a string
// Example: Converting 'userName' to uppercase and lowercase
console.log(`'userName' in uppercase: ${userName.toUpperCase()}`); // Output: "JOHNDOE"
console.log(`'userName' in lowercase: ${userName.toLowerCase()}`); // Output: "johndoe"

// Trimming whitespace from a string
// Example: Removing whitespace from both ends of 'trimmedString'
console.log(`Trimmed 'trimmedString': ${trimmedString.trim()}`); // Output: "Hello World"
// Example: Removing whitespace from the start of 'trimmedString'
console.log(`Trimmed start of 'trimmedString': ${trimmedString.trimStart()}`); // Output: "Hello World      "
// Example: Removing whitespace from the end of 'trimmedString'
console.log(`Trimmed end of 'trimmedString': ${trimmedString.trimEnd()}`); // Output: "               Hello World"

// Using string methods to check for a substring
// Example: Checking if 'userName' contains the substring "Do"
console.log(`'userName' includes 'Do': ${userName.includes("Do")}`); // Output: true
// Note: The includes method is case-sensitive

// Finding the index of a substring
// Example: Finding the starting index of "Do" in 'userName'
console.log(`Index of 'Do' in 'userName': ${userName.indexOf("Do")}`); // Output: 4

// Using the replace method to replace a substring
// Example: Replacing the first occurrence of "Do" with "Smith" in 'userName'
console.log(`Replace 'Do' with 'Smith': ${userName.replace("Do", "Smith")}`); // Output: "JohnSmith"

// Using replaceAll to replace all occurrences of a substring
// Example: Replacing all occurrences of "Do" with "Smith" in 'userName'
console.log(
  `Replace all 'Do' with 'Smith': ${userName.replaceAll("Do", "Smith")}`
); // Output: "JohnSmith"

// Concatenating strings
// Example: Concatenating 'userName' and 'trimmedString' with a comma
console.log(`Concatenated string: ${userName + " ," + trimmedString}`); // Output: "JohnDoe ,               Hello World      "

// Example: Using concat method to concatenate 'userName' and 'trimmedString'
console.log(`Concatenated using concat: ${userName.concat(trimmedString)}`); // Output: "JohnDoe               Hello World      "

// Padding a string
// Example: Padding 'lastFourDigits' to a total length of 16 with leading asterisks
const lastFourDigits = "7856";
const maskedAccountNumber = lastFourDigits.padStart(16, "*");
console.log(`Masked account number: ${maskedAccountNumber}`); // Output: "************7856"

// Example: Padding 'maskedAccountNumber' to a total length of 16 with trailing asterisks
console.log(
  `Padded with trailing asterisks: ${maskedAccountNumber.padEnd(16, "*")}`
); // Output: "************7856"

// Accessing a character in a string using charAt
// Example: Accessing the fourth character in the string "my name is anurag"
console.log(`Character at index 3: ${"my name is anurag".charAt(3)}`); // Output: "n"

// Getting the ASCII value of a character
// Example: Getting the ASCII value of the fourth character in the string "my name is anurag"
console.log(`ASCII value at index 3: ${"my name is anurag".charCodeAt(3)}`); // Output: 110

// Splitting a string into an array
// Example: Splitting the string "my name is anurag" by spaces
console.log(`Split string: ${"my name is anurag".split(" ")}`); // Output: ["my", "name", "is", "anurag"]

// template literal
// Using template literals to create a string
// Example: Creating a greeting message using template literals
const firstName = "John";
const lastName = "Doe";
const age = 30;
const greetingMessage = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(greetingMessage); // Output: "Hello, my name is John Doe and I am 30 years old."
console.log('hello,my name is' + firstName + lastName + "and i am " + age + "years old");


// Example: Using template literals to create a multi-line string
const multiLineString = `This is a string
that spans across
multiple lines.`;
console.log(multiLineString);
// Output:
// "This is a string
// that spans across
// multiple lines."
