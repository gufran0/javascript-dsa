const userName = prompt("please enter your name");
const userAge = parseInt(prompt("please enter your age")) || 23;

if (userName && userAge >= 18 && userAge <= 29) {
  console.log(`NAME: ${userName}, AGE: ${userAge}`);
} else if (userName === "") {
  console.log("User entered an empty name.");
} else if (userAge < 18) {
  console.log("User is under 18.");
} else if (userAge > 29) {
  console.log("User is over 29.");
} else if (userAge === 23) {
  console.log("User entered an invalid age, defaulted to 23.");
}else {
    console.log("heheh");
    
}

if (userName) {
  // Prompt the user to enter their age and convert it to an integer
  // If the user does not enter a valid age, default to 23
  const userAge = parseInt(prompt("please enter your age")) || 23;
} else if (userName === "") {
  console.log("User entered an empty name.");
} else if (userAge === 23) {
  console.log("User entered an invalid age, defaulted to 23.");
} 

// else if - if it finds any of the code to be true ! condition stop
// else - default

