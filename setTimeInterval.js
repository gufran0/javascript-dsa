// const timer1 = setTimeout(`console.log("john")`, 2000);
// const timer2 = setTimeout('console.log("john")', 4000);
// const timer3 = setTimeout('console.log("john")', 6000);
// we will get an id and we can use it's id to clear the timeout
// clearTimeout(15);
// clearTimeout(timer3)
// last will be cleared
// first is

const timer4 = setTimeout(a, 3000, "hhehe", 999, 88);
const timer5 = setInterval(a, 4000)

clearTimeout(timer4)
clearInterval(timer5)
function a() {
    // the arguments are what we passed as third value and after that in our setimeout
    console.log(arguments[1]);

    console.log("hello world");
}


setTimeout(() => {
    console.log("hi what's up");

}, 1000)

// web api's  - settimeout
