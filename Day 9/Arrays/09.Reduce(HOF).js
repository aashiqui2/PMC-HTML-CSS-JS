// Purpose: Reduces an array to a single value by applying a provided function cumulatively to the elements.
// is applies against an accumulator(initial value) and each element in an array (from left to right) to reduce it to an single value
// The reduce function is quite versatile and can be used for various purposes, such as finding the maximum or minimum value in an array

// sum of elements in the array
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0);
//here  0(value not index) is the accmulator
console.log(sum); 



//reduceRight(inject and fold)
//it works similarly to reduce but its starts from right to left of the array and iterates through the array from right to left.

const n=[1,2,3,4,5]
const add=n.reduceRight((acc,val)=>{
  return acc+val;
},0);
console.log(add);