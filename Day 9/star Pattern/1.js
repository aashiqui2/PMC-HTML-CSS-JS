let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // Inner loop for printing stars
   for (let num = 1; num <= 5; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);



*****
*****
*****
*****
*****
