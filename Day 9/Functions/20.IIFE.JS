//Anonymous

// IIFE -->Immediately Invoked Function as Expression
// An Immediately Invoked Function Expression (IIFE) in JavaScript can be either anonymous or have a name. '

// It is a common JavaScript pattern used to create a function expression and execute it immediately after its creation. This pattern is often used to create a private scope for variables, avoiding polluting the global scope.

// (function () {
//   console.log("This is an IIFE!");
// })();

// (function (x, y) {
//   var result = x + y;
//   console.log(result);
// })(10, 5);

// Without IIFE
console.log(myVariable);
var myVariable = "I am hoisted";
console.log(myVariable);

(function () {
  console.log(myVariable);
  var myVariable = "I am not hoisted";
  console.log(myVariable);
})();
