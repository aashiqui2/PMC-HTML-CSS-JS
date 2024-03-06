

### Problem:
Write a JavaScript program that takes an array of numbers and returns the sum of all the numbers in the array.

### Solution:
```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(numbers)); // Output: 15
```

### Problem:
Write a JavaScript program to find the maximum number in an array of numbers.

### Solution:
```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
const numbers = [10, 20, 5, 30, 15];
console.log("Maximum number:", findMax(numbers)); // Output: 30
```

### Problem:
Write a JavaScript program to find the minimum number in an array of numbers.

### Solution:
```javascript
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Example usage:
const numbers = [10, 20, 5, 30, 15];
console.log("Minimum number:", findMin(numbers)); // Output: 5
```

Certainly! Here are a few more JavaScript programs for you to practice with:

### Problem:
Write a JavaScript program to reverse a given string.

### Solution:
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example usage:
const inputString = "Hello, World!";
console.log("Reversed string:", reverseString(inputString)); // Output: "!dlroW ,olleH"
```

### Problem:
Write a JavaScript program to check if a given number is a palindrome or not.

### Solution:
```javascript
function isPalindrome(num) {
  const originalNum = num.toString();
  const reversedNum = originalNum.split('').reverse().join('');
  return originalNum === reversedNum;
}

// Example usage:
const number = 12321;
console.log("Is palindrome:", isPalindrome(number)); // Output: true
```

### Problem:
Write a JavaScript program to find the factorial of a given number.

### Solution:
```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Example usage:
const num = 5;
console.log("Factorial:", factorial(num)); // Output: 120
```


Of course! Here are seven more JavaScript programs for you to practice with:

### Problem:
Write a JavaScript program to find the length of the longest word in a given sentence.

### Solution:
```javascript
function longestWordLength(sentence) {
  const words = sentence.split(' ');
  let maxLength = 0;
  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

// Example usage:
const sentence = "The quick brown fox jumped over the lazy dog";
console.log("Length of longest word:", longestWordLength(sentence)); // Output: 6
```

### Problem:
Write a JavaScript program to remove duplicates from an array of numbers.

### Solution:
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log("Array with duplicates removed:", removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
```

### Problem:
Write a JavaScript program to sort an array of numbers in ascending order.

### Solution:
```javascript
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// Example usage:
const numbers = [5, 2, 8, 1, 4];
console.log("Sorted array:", sortArray(numbers)); // Output: [1, 2, 4, 5, 8]
```

### Problem:
Write a JavaScript program to find the second largest number in an array of numbers.

### Solution:
```javascript
function secondLargest(arr) {
  arr.sort((a, b) => b - a);
  return arr[1];
}

// Example usage:
const numbers = [10, 20, 5, 30, 15];
console.log("Second largest number:", secondLargest(numbers)); // Output: 20
```

### Problem:
Write a JavaScript program to count the number of vowels in a given string.

### Solution:
```javascript
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Example usage:
const inputString = "Hello, World!";
console.log("Number of vowels:", countVowels(inputString)); // Output: 3
```

### Problem:
Write a JavaScript program to check if a given string is a palindrome.

### Solution:
```javascript
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

// Example usage:
const string = "A man, a plan, a canal, Panama";
console.log("Is palindrome:", isPalindrome(string)); // Output: true
```

### Problem:
Write a JavaScript program to find the largest sum of any two elements in an array of numbers.

### Solution:
```javascript
function largestSumOfTwo(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
}

// Example usage:
const numbers = [10, 20, 5, 30, 15];
console.log("Largest sum of any two elements:", largestSumOfTwo(numbers)); // Output: 50
```

