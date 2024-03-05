// Splice and Slice
// splice can be used to add an new item to an array 
//increases the length of the array after doing the insertion and deletion
//it does'nt modify the originla array
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
//array.splice(start, deleteCount, item1, item2, ...);
let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(num)
console.log(deletedValues)
console.log(num.length);

let fruits = ["apple", "orange", "banana"];
fruits.splice(1, 0, "grape", "kiwi");
console.log(fruits); 
console.log(fruits.length);


//The slice() method in JavaScript is used to extract a portion of an array and create a new array containing the extracted elements. 
//it does not affect the original array
// It returns a shallow copy of a portion of the array, specified by the start and end parameters, without altering the original array.

let a=[1,2,3,4,5]
// let newNum = a.slice(3)
// let newNum = a.slice(3, 5)
let newNum = a.slice(-3, -1)
console.log(newNum)