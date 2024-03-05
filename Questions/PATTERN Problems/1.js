const n = 5
// Left Half-Pyramid Pattern in JavaScript
// Output
//     *
//    **
//   ***
//  ****
// *****
function createHalfPyramid (height) {
  
    for (var i = 1; i <= height; i++) {
      var row = '';
      
      for (var j = 1; j <= (height - i); j++) {
        row += ' ';
      }
      
      for (var k = 1; k <= i; k++) {
        row += '*';
      }
      
      console.log(row);
    }
  }
  createHalfPyramid(n);