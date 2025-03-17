// Function Expression
const divide = function () {
  return 2000 / 100;
};

// Arrow Function with One Parameter (Implicit Return)
const square = (x) => x * x;

// Arrow Function with Two Parameters (Implicit Return)
const add = (a, b) => a + b;

// Testing the functions
console.log(divide()); // Should print 20
console.log(square(4)); // Should print 16
console.log(add(3, 5)); // Should print 8
