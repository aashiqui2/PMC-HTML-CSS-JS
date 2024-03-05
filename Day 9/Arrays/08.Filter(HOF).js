// Purpose: Creates a new array containing only the elements that satisfy a provided 
// he filter function in JavaScript does not modify the original array. Instead, it creates a new array containing only the elements that satisfy a provided condition. The original array remains unchanged.

const numbers = [1, 2, 3, 4, 5];

// Filtering even numbers
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);
console.log(numbers);
