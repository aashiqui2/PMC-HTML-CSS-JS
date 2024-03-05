// Purpose: Transforms each element of an array using a provided function.
// t's important to note that map does not modify the original array or object; instead, it creates a new array or object with the transformed values.
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers); //returns an array


// //with objects
// const studentGrades = {
//     alice: 90,
//     bob: 75,
//     charlie: 88,
//   };
  
//   // Adding 5 to each student's grade
//   const adjustedGrades = Object.fromEntries(
//     Object.entries(studentGrades).map(([student, grade]) => [student, grade + 5])
//   );
  
//   console.log(adjustedGrades);
//   // Output: { alice: 95, bob: 80, charlie: 93 }
  
