let initialNum = 1;
while (initialNum < 100) {
  console.log(initialNum);

  initialNum++;
}

//
// ek starting and ek ending
const names = ["John", "Mary", "David", "Emma"];
let i = 0;
while (i < names.length) {
  console.log(`${i + 1}. ${names[i]} procodrr`);
  names[i] += names[i] + "procodr";
  i++;
}
const numbers = [3, 5, 67, 45, 4];
let index = 0;
let firstEven = null;

while (index < numbers.length) {
  if (numbers[index] % 2 === 0) {
    firstEven = numbers[index];
    break;
  }
  index++;
}

let initialSum1 = 20;
while(initialSum1 >=1){
    console.log(initialSum1);
    initialSum1-=2;
}

let initialNum1 = 1;
let initialSum2 = 0;

while (initialNum1 <= 10) {
  initialSum2 = initialSum2 + initialNum1;
  initialNum1++;
  console.log(initialSum2);
}
let initialNums1 = 20;
while (initialNums1 >= 1) {
  console.log(initialNums1);
  initialNums1--;
}
// kaha se start krna
// kaha tak chalna
// kya krna
// while (initialNums1 >= 1) { 