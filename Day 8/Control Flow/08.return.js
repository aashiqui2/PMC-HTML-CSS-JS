// JavaScript return statement is used to return a particular value from the function.
// The function will stop the execution when the return statement is called and return a specific value. 
function add(x, y) {
    return x + y;
}

let result = add(3, 4);
console.log(result); // Output: 7

//example 2
function sayHello() {
    console.log("Hello!");
    return; // No value specified, returns undefined
}

let greeting = sayHello();
console.log(greeting); // Output: undefined

//example 3
function checkNumber(x) {
    if (x < 0) {
        return "Negative number"; // Function exits here for negative numbers
    }
    return "Non-negative number"; // This line is not executed for negative numbers
}

console.log(checkNumber(-3)); // Output: Negative number
console.log(checkNumber(5));  // Output: Non-negative number

