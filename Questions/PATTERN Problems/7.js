// Pyramid pattern in JavaScript
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
function pyramid1(height){
  let a = '';
  let m = (height-1); 
  for(i=1; i <= height; i++)
  {
      a = a.trim();
      a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
      console.log(a);
      m--;
  }
}
pyramid1(n);