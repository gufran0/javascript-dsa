const myName = "hehe";

const user = {
  firstName: "john",
  lastName: "doe",
  age: 26,
  education: 12,
  city: delhi,
};

const user2 = {
  firstName: "john",
  "last-Name": "doe",

  age: 26,
  education: 12,
  city: delhi,
  hehe: "developer",
  address: {
    street: "street1",
    city: "city1",
    pincode: 834001,
    moreDetails: {
      populataion: 93939393,
      area: "7373",
    },
  },
};
// to access the value of the property we use dot and bracket notation

console.log(user.firstName); // john
console.log(user["firstName"]); // john
console.log(user["last-Name"]); // doe
// answer for it> developer
console.log(user2[myName]);
console.log(user2["firstName" + "lastName"]);
// answer is john doe

// values which are not present in it will be undefined

// behind the scenes object keys are strings
// we can also write javascript variable and experssions

// When comparing objects, JavaScript compares their memory addresses, not their values
// it primitve data type values are compared not their address.

// if we want to update it

user2.age = 28;
user2["is-student"] = true;
user2.address.moreDetails.populataion;
user2["address"]["moreDetails"]["area"];
