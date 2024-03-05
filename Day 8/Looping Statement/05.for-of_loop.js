//for of loop is only for array not for regular object
const numbers = [1, 2, "zenotronz", 4, 5];
for (let number of numbers) {
  console.log(number); // Outputs: 1, 2, 3, 4, 5
}


//with object

// This will result in an error
const person = {
    name: 'John',
    age: 30,
    job: 'developer'
  };
  
  for (let value of person) {
    console.log(value);
  }

//   Using for...of directly with an object will result in an error because objects are not iterable by default. for...of is meant for iterable objects like arrays and strings.
  