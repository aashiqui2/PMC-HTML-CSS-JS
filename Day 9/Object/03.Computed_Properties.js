let fruit = "apple";

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.apple);

let fruit1 = "apple";
let bag1 = {};

// take property name from the fruit variable
bag1[fruit1] = 5;
console.log(bag1);

let fruit2 = "apple";
let bag2 = {
  [fruit2 + "Computers"]: 5, // bag.appleComputers = 5
};

console.log(bag2);
// these properties are all right e can use reservd word also there is no restriction
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return); // 6

//   function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

let user = makeUser("John", 30);
console.log(user);
console.log(user.name); // John



let obj1 = {
    0: "test" ,// same as "0": "test"
    subject:"maths"
  };
  
  // both alerts access the same property (the number 0 is converted to string "0")
  console.log( obj1["0"] ); // test
  console.log( obj1[0] ); // test (same property)
  console.log(obj1["subject"]);
//   console.log(obj1[subject]); //error


let obj2 = {
    test: undefined
  };
  
  console.log( obj2.test ); // it's undefined, so - no such property?
  
  console.log( "test" in obj2 ); // true, the property does exist!
