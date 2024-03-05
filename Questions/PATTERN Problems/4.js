// Right Half Pyramid Pattern with star in JavaScript
// *
// **
// ***
// ****
// *****
function rightHalfPyramid (height) {

    for (let i = 1; i <= height; i++) {
      let row = '';
  
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
  
      console.log(row);
    }

  }
  
  rightHalfPyramid(n);