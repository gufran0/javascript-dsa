// let n = 4;

// for (let row = 1; row <= n; row++) {
//   let str = "";
//   for (let col = 1; col <= n; col++) {
//     str += "*";
//   }
//   console.log(str);
// }

let p = 4;

for (let row = 1; row <= p; row++) {
  let str = "";
  for (let col = 1; col <= row; col++) {
    str += "*";
  }
  console.log(str);
}

let q = 4;

for (let row = 1; row <= q; row++) {
  let str = "";
  let spaces = q-row;
  for (let col = 1; col <= spaces; col++) {
    str += " ";
  }
  let stars = row;
  for (let col = 1; col <= stars; col++) {
    str += "*";
  }
  console.log(str);
}
