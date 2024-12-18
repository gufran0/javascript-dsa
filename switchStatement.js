// if (dayNumber === 0) {
//   console.log("It is Sunday Today");
// } else if (dayNumber === 1) {
//   console.log("It is Monday Today");
// } else if (dayNumber === 2) {
//   console.log("It is Tuesday Today");
// } else if (dayNumber === 3) {
//   console.log("It is Wednesday Today");
// } else if (dayNumber === 4) {
//   console.log("It is Thursday Today");
// } else if (dayNumber === 5) {
//   console.log("It is Friday Today");
// } else if (dayNumber === 6) {
//   console.log("It is Saturday Today");
// } else {
//   console.log("Please Enter a Valid Day Number");
// }
// Define the day number (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
// const dayNumber = Number(3);

// Use a switch statement to determine the day of the week based on the day number
switch (dayNumber) {
  case 0:
    // If dayNumber is 0, log "it is sunday"
    console.log("it is sunday");
    break;
  case 1:
    // If dayNumber is 1, log "it is monday"
    console.log("it is monday");
    break;
  case 2:
    // If dayNumber is 2, log "it is tuesday"
    console.log("it is tuesday");
    break;
  case 3:
    // If dayNumber is 3, log "it is wednesday"
    console.log("it is wednesday");
    break;
  case 4:
    // If dayNumber is 4, log "it is thursday"
    console.log("it is thursday");
    break;
  case 5:
    // If dayNumber is 5, log "it is friday"
    console.log("it is friday");
    break;
  case 6:
    // If dayNumber is 6, log "it is saturday"
    console.log("it is saturday");
    break;
  default:
    // If dayNumber is not between 0 and 6, log "no days"
    console.log("no days");
}

// Determine the user's life stage based on age using a switch statement
// The switch statement evaluates the expression and executes the matching case block
const userAge = 20;
const userName = "john";
switch (true) {
  case userAge >= 0 && userAge <= 4:
    // If userAge is between 0 and 4, log that the user is a kid
    console.log(`${userName} is a kid.`);
    console.log("And he/she is playing.");
    break;
  case userAge >= 5 && userAge <= 17:
    // If userAge is between 5 and 17, log that the user is a school student
    console.log(`${userName} is a school student.`);
    console.log("And he/she is learning science and maths.");
    break;
  case userAge >= 18 && userAge <= 24:
    // If userAge is between 18 and 24, log that the user is a college student
    console.log(`${userName} is a college student.`);
    console.log("And he/she is learning computer science.");
    break;
  case userAge >= 25 && userAge <= 45:
    // If userAge is between 25 and 45, log that the user is a working professional
    console.log(`${userName} is a working professional.`);
    console.log("And he/she is a web developer.");
    break;
  case userAge > 45 && userAge < 121:
    // If userAge is between 46 and 120, log that the user is retired
    console.log(`${userName} is retired.`);
    console.log("And he/she reads newspaper.");
    break;
  case userAge >= 121:
    // If userAge is 121 or more, log that the user is immortal
    console.log(`${userName} is immortal.`);
    console.log("And he/she reads newspaper.");
    break;
  default:
    // If userAge is not valid, log "Please Enter a Valid Age"
    console.log("Please Enter a Valid Age");
}

// Use a switch statement to determine the message based on the grade
switch (grade) {
  case "A":
    // If grade is "A", log "you got good numbers"
    console.log("you got good numbers");
    break;
  case "B":
    // If grade is "B", log "you are average"
    console.log("you are average");
    break;
  case "C":
    // If grade is "C", log "you need improvement"
    console.log("you need improvement");
    break;
  case "D":
    // If grade is "D", log "you are below average"
    console.log("you are below average");
    break;
  case "F":
    // If grade is "F", log "you failed"
    console.log("you failed");
    break;
  default:
    // If grade is not recognized, log "Invalid grade"
    console.log("Invalid grade");
}
