let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += n;
   }

   // Add a new line character after contents of each line
   pattern += "\n";
}
console.log(pattern);


1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
