// array inside array
[[]];

// [array(0)]
const values = [
  ["john", 75],
  ["doe", 64],
];
console.log(values[1]); // Output: ["doe",64] (it gives the array)
console.log(values[1][0]);
// Output: "doe"
// it gives the values inside the array
values[1][5] = "mango";
console.log(values);


const ticTac = [
    ["X", "O", "X"],
    [null,null,"0"],
    ["X", "X", "X"],
]
console.log(ticTac[0][2]);
