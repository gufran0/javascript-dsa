function outer() {
  const a = 4;
  function parent() {
    const b = 6;
    function add() {
      console.log(a + b);
    }
    return add;
  }
  return parent;
}
const add1 = outer();

// it will form closure with OUTER SCOPE AS 4
//  AND WITH PARENT AS 6

function outer() {
  const a = 4;
  function parent() {
    const b = 6;
    return function add() {
      console.log(a + b);
    };
  }
  return parent;
}
const add22 = outer();

function outer() {
  const a = 4;
  function parent() {
    const b = 6;
    return function () {
      console.log(a + b);
    };
  }
  return parent;
}
const add223 = outer();

const maths = {
  E: 222222,
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

maths.add(2, 3);
