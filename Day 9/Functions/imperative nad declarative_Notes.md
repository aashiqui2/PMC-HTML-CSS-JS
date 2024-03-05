Imperative and declarative are two programming paradigms that describe different approaches to writing code. These terms are not exclusive to JavaScript but apply to programming in general.

### Imperative Programming:

Imperative programming is a style of programming where the code explicitly describes the steps that the computer must take to achieve the desired result. It focuses on "how" to perform a task, with a sequence of statements that modify the program's state.

Example (imperative approach to filtering even numbers):

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers); // Output: [2, 4]
```

In this imperative example, we explicitly loop through the array, check each element, and push the even numbers into a new array.

### Declarative Programming:

Declarative programming, on the other hand, is a style where the code expresses the logic of a computation without describing its control flow. It focuses on "what" needs to be done rather than "how" to do it. Declarative code tends to be more concise and abstracts away implementation details.

Example (declarative approach to filtering even numbers):

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

In this declarative example, we use the `filter` method, which abstracts away the loop and condition. The code expresses the desired outcome (filtering even numbers) rather than explicitly detailing how to achieve it.

### Pros and Cons:

- **Imperative Programming:**
  - Pros: Can be more straightforward for simple tasks, easier to understand for beginners, and may offer more control over low-level details.
  - Cons: Tends to be more verbose, may lead to code that is harder to maintain, and can be error-prone due to the explicit management of state.

- **Declarative Programming:**
  - Pros: Emphasizes readability and abstraction, often results in more concise code, and may be easier to maintain and reason about.
  - Cons: Requires understanding of higher-level abstractions, can be less intuitive for those unfamiliar with the specific declarative constructs.

In practice, many programs use a combination of both imperative and declarative styles. JavaScript, being a multi-paradigm language, allows developers to choose the approach that best fits the problem at hand. Functional programming, which is a declarative paradigm, has gained popularity in the JavaScript community, with features like higher-order functions, `map`, `filter`, and `reduce` promoting a more declarative style.