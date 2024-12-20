// Define a user object with nested properties including address and moreDetails
const user = {
  firstName: "john",
  lastName: "doe",
  address: {
    street: "street1",
    city: "city1",
    moreDetails: {
      pincode: 834001,
      country: "country1",
      coordinates: {
        latitude: 28.6139,
        longitude: 77.209,
      },
    },
  },
  age: 15,
  isGraduate: true,
};

// Delete the firstName property from the user object
delete user.firstName;

// Define another user object, user2, with similar structure to user
const user2 = {
  firstName: "john",
  lastName: "doe",
  address: {
    street: "street1",
    city: "city1",
    moreDetails: {
      pincode: 834001,
      country: "country1",
      coordinates: {
        latitude: 28.6139,
        longitude: 77.209,
      },
    },
  },
  age: 15,
  isGraduate: true,
};

// Seal the user2 object, preventing the addition or removal of properties
// but allowing modification of existing properties
Object.seal(user2);

// Freeze the user object, making it immutable; no changes to properties are allowed
Object.freeze(user);

// Attempt to delete the city property from the frozen user object (will not succeed)
delete user.city;

// Check if the property "mobileNumber" exists in the user object (returns false)
"mobileNumber" in user; // false

// Check if the property "firstName" exists in the user object (returns true)
"firstName" in user; // true

// Note: In JavaScript, the 'in' operator checks if a property exists in an object

// Explanation: In JavaScript, primitive values are compared by value, while objects are compared by reference.
// This means that changing a property in an object does not change its reference address.
