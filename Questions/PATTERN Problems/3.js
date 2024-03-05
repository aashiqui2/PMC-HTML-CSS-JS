// Down Side Left Half Pyramid in JavaScript
// *****
//  ****
//   ***
//    **
//     *
function downSideLeftHalfPyramid (height) {
  
    for (var i = 1; i <= height; i++) {
      var row = '';
  
      for (var j = 1; j <= (i - 1); j++) {
        row += ' ';
      }
  
      for (var j = 1; j <= (height - i + 1); j++) {
        row += '*';
      }
          
      console.log(row);
    }
  }
  
  downSideLeftHalfPyramid(n);