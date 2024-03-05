// Two Pyramid in one patterns in JavaScript
// *
// **
// ***
// ****


// ****
// ***
// **
// *
  function rightHalfTwoPyramid(height) {
    let result = ""
    for (let i = 1; i <= height; i++) {
        let row = ""
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
      console.log(row);
    }
    console.log("\n");
    for (let i = height; i >= 0; i--) {
        let row = ""
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  rightHalfTwoPyramid(n);
