// Function a takes a parameter b and logs its type and value.
// If b is a function, it calls b.
function a(b) {
    console.log(typeof b); // Log the type of b
    console.log(b); // Log the value of b
    if (typeof b === 'function') { // Check if b is a function
        b(); // Call b if it's a function
    }
}

// Example calls to function a with different types of arguments
// a({username:"anurag",userAge:20}) // Object
// a([1,2,3]) // Array
// console.dir(a); // Logging the function itself
// a.age = 87 // Assigning a property to the function

// Function sayHi logs a greeting message 
function sayHi() {
    console.log("hiii john");
}
// call back function
a(function () {
    console.log("a");

})

// Calling function a with sayHi as an argument
a(sayHi);

// Note: b can be called inside function a because it is a function.
// However, if the value of b is an array, number, or string, it cannot be called as a function.
// if we calling a function and pass other function as an argument it is called callback function
// a is higher order function
// b is callback function