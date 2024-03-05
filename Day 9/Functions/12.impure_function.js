// for a same input we get different output
var a=2//external factor
//impure function
function addImpure(x){
    console.log(x+a);
    a++//using the reference of a it will increment the value from 2 to 3
}
addImpure(1)
addImpure(1)

function impure(x,a){
    console.log(x+a);
}
impure(2,3)
impure(2,3)
//still the function is impure because we are using the [console.log] a external factor


function addpure(x,a){
    return x+a
}
addpure(2,3)