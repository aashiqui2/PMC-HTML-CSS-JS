let numberVar = 42;
console.log(typeof numberVar); // Output: "number"

let stringVar = "Hello, World!";
console.log(typeof stringVar); // Output: "string"

let booleanVar = true;
console.log(typeof booleanVar); // Output: "boolean"

let undefinedVar;
console.log(typeof undefinedVar); // Output: "undefined"

let nullVar = null;
console.log(typeof nullVar); // Output: "object" (Note: typeof null returns "object," which is a historical quirk.)

let symbolVar = Symbol('unique');
console.log(typeof symbolVar); // Output: "symbol"

let objectVar = { key: 'value' };
console.log(typeof objectVar); // Output: "object"

let arrayVar = [1, 2, 3];
console.log(typeof arrayVar); // Output: "object"

let functionVar = function() {};
console.log(typeof functionVar); // Output: "function"

const bigIntVar = 9007199254740991n; // A BigInt literal
const anotherBigIntVar = BigInt(9007199254740991); // Creating a BigInt using the BigInt constructor

console.log(typeof bigIntVar); // Output: "bigint"

const currentDate = new Date(); // Creates a Date object representing the current date and time

const specificDate = new Date('2023-01-01'); // Creates a Date object for a specific date

console.log(currentDate); // Output: Current date and time
console.log(specificDate); // Output: January 1, 2023 at 00:00:00 local time


