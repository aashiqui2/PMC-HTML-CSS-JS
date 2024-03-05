// The find method is used to find the first element in an array that satisfies a given condition. It returns the value of the first element that passes the test function, or undefined if no element satisfies the condition.

// const numbers = [1, 2, 3, 4, 5];
const numbers = [1];

const result = numbers.find(function (number) {
  return number > 2;
});

console.log(result); 
