// Define an array of colors
const colors = ["red", "green", "blue"];
const oddNumbers = [1, 3];

// Adding elements to the end of the array using push
colors.push("yellow");
colors.push("purple", "orange");

// Displaying the array after using push
console.log(colors); // Output: ["red", "green", "blue", "yellow", "purple", "orange"]

// Removing the last element from the array using pop
const lastColor = colors.pop();

// Displaying the removed element and the array after using pop
console.log(lastColor); // Output: "orange"
console.log(colors); // Output: ["red", "green", "blue", "yellow", "purple"]

// shift - to remove the element from first // it modify  the original array
console.log(colors.shift());

// unshift - to add the element at the first position
console.log(colors.unshift());

// concat - to add the elements from one array to another array and it gives us new array (doesnt modify the original array)
console.log(colors.concat(lastColor, oddNumbers));

// indexof - to find the index of the first occurrence of a specified value in an array
console.log(colors.indexOf("blue"));
// to get the index of the value we use indexof
// it gives the index of the first occurrence of the specified value in the array. If the value is not found it gives -1

// includes method - checks if the array includes a certain element
console.log(colors.includes("blue")); // Output: true

// reverse method - reverses the order of the elements in the array
console.log(colors.reverse()); // Output: ["purple", "yellow", "blue", "green", "red"]

// sort method - sorts the elements of the array in place and returns the sorted array
console.log(colors.sort()); // Output: ["blue", "green", "purple", "red", "yellow"]

// slice method - returns a shallow copy of a portion of an array into a new array object
console.log(evenNumbers.slice(2, 4)); // Output: [4, 6]

// splice method - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(evenNumbers.splice(2, 2, "heheh", "value")); // Output: [4, 6]
