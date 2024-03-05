// The padStart() method pads a string from the start.
let text = "5";
let padded = text.padStart(4,"0");
let padded1 = text.padEnd(4,"#");
console.log(padded);
console.log(padded1);

// The charAt() method returns the character at a specified index (position) in a string:
let text1 = "HELLO WORLD";
let char = text1.charAt(0);
let char1 = text1.charCodeAt(0);
console.log(char);
console.log(char1);


// A string can be converted to an array with the split() method:
let text2 = "a,b,c,d,e,f";
const myArray = text2.split(",");
console.log(myArray);
let name="kumar"
const myArr = name.split("");
console.log(myArr);