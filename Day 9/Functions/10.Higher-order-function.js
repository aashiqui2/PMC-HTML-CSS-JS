// Higher-order functions (HoFs) are functions that either take one or more functions as arguments or return a function as a result. 

// Higher-order function that takes a function as an argument
function doOperation(operation, a, b) {
    return operation(a, b);
  }
  
  // Example functions to pass as arguments
  function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  // Using the higher-order function with different operations
  console.log(doOperation(add, 3, 4));       // Output: 7
  console.log(doOperation(multiply, 2, 5));  // Output: 10



//   another example
// Higher-order function that returns a function
function multiplier(factor) {
    // Returned function is a closure that "remembers" the factor
    return function (x) {
      return x * factor;
    };
  }
  
  // Using the higher-order function to create a specific multiplier
  const multiplyByTwo = multiplier(2);
  const multiplyByFive = multiplier(5);
  
  console.log(multiplyByTwo(3));  // Output: 6
  console.log(multiplyByFive(4)); // Output: 20
  
  