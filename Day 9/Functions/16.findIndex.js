// The findIndex method is similar to find, but it returns the index of the first element that satisfies the given condition instead of the element itself. If no element satisfies the condition, it returns -1.


// const numbers = [1, 2, 3, 4, 5];
const numbers = [1];
const index = numbers.findIndex(function (number) {
  return number > 2;
});

console.log(index); 
