// Array of fruits and other elements, including an object and a nested array
const fruitsCollection = [
  "apple",
  "banana",
  "orange",
  "grape",
  "mango",
  { name: "hello" }, // Object with a property 'name'
  [2, 3], // Nested array
];

// Accessing the 'name' property of the object at index 5
console.log(fruitsCollection[5].name); // Output: 'hello'

// Accessing the first element of the nested array at index 6
console.log(fruitsCollection[6][0]); // Output: 2

// Adding a new element 'papaya' at index 10, creating empty slots in between
fruitsCollection[10] = "papaya";

// Displaying the entire array, including empty slots
console.log(fruitsCollection); // Output: [ 'apple', 'banana', 'kch naya', 'grape', 'mango', { name: 'hello' }, [ 2, 3 ], <3 empty items>, 'papaya' ]

// Adding 'hehe' to the end of the array twice
fruitsCollection[fruitsCollection.length] = "hehe";
fruitsCollection[fruitsCollection.length] = "hehe";

// Displaying the length of the array, which includes all elements and empty slots
console.log(fruitsCollection.length); // Output: 12

// Displaying the type of fruitsCollection, which is 'object' because arrays are objects in JavaScript
console.log(typeof fruitsCollection); // Output: 'object'

// Updating the element at index 2 to 'kch naya'
fruitsCollection[2] = "kch naya";

// Adding multiple elements to the end of the array using push
fruitsCollection.push("push", "push2", "push3");

// Removing the last element from the array using pop
fruitsCollection.pop();

// Note: We can modify elements within the array, but reassigning the entire array (e.g., fruitsCollection = []) is not allowed if it's declared with const
const newArray = []
newArray.firstName = "hehe"
// we can add key value pair in arrays also
