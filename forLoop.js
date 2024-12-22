for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
// initizaltion
// check if the condiiton is true
// it will increase the
// it checks the condiiton , if the condition is true it prints and it won't create the variable again
// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }
const names = ["John", "Mary", "David", "Emma"];
for (let i = 0; i <= names.length; i++) {
  console.log(names[i]);
}
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

for (let initialNums1 = 20; initialNums1 >= 1; initialNums1--) {
  console.log(initialNums1);
}
for(let i = 0;i <101;i++){
    if(i %2 === 0){
        console.log(i,"it is even");
        
    }else {
        console.log(i,"it is odd");
        
    }
}