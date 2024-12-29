// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// for (const fruit of fruits) {
//     console.log(fruit);
// }


// const user = "hello user"

// for (let users of user) {
//     console.log(users)
// }

const person = {
    firstName: "john",
    lastName: "doe",
    age: 50,
    eyeColor: "blue",
    city: "bangalore"
}
// for (const key in person) {
//     console.log(key, ":", person[key]);

// }
const personValues = Object.values(person)
console.log(personValues);

const personKeys = Object.keys(person)
console.log(personKeys);

const personEntry = Object.entries(person)
console.log(personEntry);

// for (const keys of personKeys) {
//     console.log(person[keys]);
    
// }