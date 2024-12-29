// Logging the value of userName
console.log(userName);
// The value is undefined in the first run due to the memory creation phase 

// Initializing the variable userName
var userName = "john"

// Function to log the value of userName
function hi() {
    console.log(userName);
}
// The function is hoisted

// Function to log the value of userName using a function expression
const sayHi = function () {
    console.log(userName);
}
// The function is hoisted but it is not accessible because it is a const, let, or var and behaves like a normal variable
// In the case of var, it will be undefined and we know that undefined is not a function
// Function expression is not hoisted but function declaration is
