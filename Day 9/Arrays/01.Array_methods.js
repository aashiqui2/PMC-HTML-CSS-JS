// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)//return a string
let r = num.pop() // pop returns the popped element
console.log(num, r)
let q = num.push(56) // push returns the new array length
console.log(num, q)
let t = num.shift()
console.log(t, num) // Removes an element from the start of the array

let f = num.unshift(78)//add element from the start of the array and return the length of the array
console.log(f, num)
console.log(f)