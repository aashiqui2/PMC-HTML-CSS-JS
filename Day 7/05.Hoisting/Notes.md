Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This behavior can lead to some unexpected results if not understood correctly.

### Variable Hoisting:

In the case of variable declarations using `var`, the declaration is hoisted, but the assignment remains in place:

```javascript
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

In the above example, the variable `x` is hoisted to the top of the scope, but its value is not assigned until the line where it is declared. Therefore, the first `console.log(x)` outputs `undefined`.

### Function Hoisting:

Function declarations are also hoisted, including their entire definition:

```javascript
hello(); // Output: Hello, World!
function hello() {
  console.log('Hello, World!');
}
```

In this example, the `hello` function is called before its declaration, but it still works because the function declaration is hoisted to the top of the scope.

### Hoisting with `let` and `const`:

Unlike `var`, declarations with `let` and `const` are hoisted, but they are not initialized until the actual declaration is reached in the code. As a result, accessing them before declaration leads to a `ReferenceError`:

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

### Hoisting in Practice:

Understanding hoisting is crucial for writing clean and predictable code. Here's an example that combines variable and function hoisting:

```javascript
var a = 1;
function b() {
  console.log(a); // Output: undefined
  var a = 2;
}
b();
```

In the `b` function, there's a variable `a` declared inside the function scope. When the function is executed, the local variable `a` is hoisted to the top of the function scope, but its value is not assigned until the line where it is declared. As a result, the `console.log(a)` outputs `undefined`.

To avoid issues related to hoisting, it's a good practice to declare variables at the top of their scope and initialize them before use. Additionally, using `let` and `const` helps prevent unintentional hoisting-related bugs.