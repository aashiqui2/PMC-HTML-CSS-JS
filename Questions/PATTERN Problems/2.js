// Down Side Right Half Pyramid in JavaScript
// *****
// ****
// ***
// **
// *
function downSideRightHalfPyramid(n){
    for(let i=1;i<=n;i++){
        let row = ""
        for(let j=1;j<=(n-i+1);j++){
            row += "*"
        }
        console.log(row)
    }
}
downSideRightHalfPyramid(n);