// The `continue` statement is used to skip the rest of the loop's code for the current iteration and move to the next iteration.

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the rest of the loop's code for i equals 2
    }
    console.log(i);
}