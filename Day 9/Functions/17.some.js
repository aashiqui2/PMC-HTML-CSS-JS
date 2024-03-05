// The some method tests whether at least one element in the array passes the provided function's test. It returns a boolean indicating whether the condition is satisfied by at least one element.


// const numbers = [1, 2, 3, 4, 5];
const numbers = [1];
const hasEvenNumber = numbers.some(function (number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber);
