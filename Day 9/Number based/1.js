let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // inner loop runs for n
   for (let num = 1; num <= n; num++) {
      pattern += num;
   }

   // Add a new line character after contents of each line
   pattern += "\n";
}
console.log(pattern);



1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
