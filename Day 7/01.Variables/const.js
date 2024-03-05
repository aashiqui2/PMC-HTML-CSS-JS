//const has block scope
// it cannot be redeclared and reassigned
const c=3
const c=2 
c=4 // error->Assignment to constant variable
console.log(c);



// we can reassign the object but not the whole object using the const keyword 
const person = { name: 'John', age: 30 };
// You can modify the properties of the object
person.name = 'Jane'; // Valid
person.age = 31; // Valid

// However, you cannot reassign the variable itself
// person = { name: 'Bob', age: 25 }; // Error


// When const is used with objects, it means that the variable cannot be reassigned to a new object, but the properties of the object can still be modified.