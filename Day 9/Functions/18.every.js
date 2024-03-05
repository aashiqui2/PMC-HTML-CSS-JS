// It seems like you mentioned "very," but I assume you meant every. The every method tests whether all elements in the array pass the provided function's test. It returns a boolean indicating whether the condition is satisfied by all elements.

const numbers = [2, 4, 6, 8, 10];

const allEvenNumbers = numbers.every(function (number) {
  return number % 2 === 0;
});

console.log(allEvenNumbers);
