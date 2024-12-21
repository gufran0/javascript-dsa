// Define an array of fruits
const fruits = ["mango", "apple", "orange"];
// Create a new array and copy the original array into it
const myFruits = fruits;
// Add new fruits to the copied array
myFruits.push("dates");
myFruits.push("grapes");

// Define a user object
const user1 = {
  name: "John",
  lastName: "singh",
};
// Create a new user object and copy the original user object into it
const user2 = user1;
// Change the last name of the copied user object
user2.lastName = "doe";
// Arrays and objects are mutable in nature
// This means that when you modify the original array or object, the changes are reflected in all references to it.

// Define two string variables
const user1Name = "john";
const user1Name2 = "john";
// Strings are immutable in nature
// This means that when you modify the original string, the changes are not reflected in the other variable
// Copy the original user object into a new object
Object.assign(user1, user2);
// Create a new object and copy the original user object into it
const user3 = { ...user1 };
// Using spread and assign doesn't modify the original array because both have different arrays

// Create a new array and copy the original array into it
const myFruits3 = [].concat(fruits);

// Create a new array and copy the original array into it
const myFruits4 = fruits.slice();
// It creates a new array
// To copy an array, we can use this method

// Define an object with nested objects
const obj1 = {
  name: "John",
  address: {
    street: "123 Main St",
    city: {
      name: "New York",
      state: "NY",
    },
  },
};
// Create a new object and copy the original object into it
const obj2 = { ...obj1 };
// Change the city name of the copied object
obj2.address.city.name = "london";
console.log(obj1);
console.log(obj2);
// shallow copy
// object.assign
// spread operator

// Even if we use the spread operator and change the address, it will reflect in both of the objects? Why? Because we have only copied one object and in this we have two objects

// deep copy

