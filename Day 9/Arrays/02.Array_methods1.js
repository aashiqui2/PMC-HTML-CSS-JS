// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]

// console.log(num.length)
// delete num[0]//delete the value and leaves the hole (space) in the array i the index of 0

// The delete operator in JavaScript is used to delete a property from an object, but when used with an array, it doesn't affect the length of the array as you might expect.

//The length of the array remains the same because the delete statement removes the element at index 0 but doesn't actually change the length property of the array. It leaves a hole in the array, setting the value at index 0 to undefined, but the array's length is not automatically adjusted.

// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

