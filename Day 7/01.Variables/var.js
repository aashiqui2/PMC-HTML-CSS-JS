//var has function scope 
//we can redeclare the variable which we used earlier
// we can reassign also
// var is not block scope
var a=1
var a=2
a=3
b=2  ////without declare any variable type it will be var global
console.log(a);

function add(){
    var a=4
    console.log(a);
}
add();
console.log(a);