
// Imperative programming is a style of programming where the code explicitly describes the steps that the computer must take to achieve the desired result. It focuses on "how" to perform a task, with a sequence of statements that modify the program's state.





const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);