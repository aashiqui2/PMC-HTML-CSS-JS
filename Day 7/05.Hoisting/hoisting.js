// hoisting: is a behavior where variable and function declartion are moved to the top of their containning scope during the compilation time 

console.log(a);//undefined 
var a=2

// console.log(c);//c is not defined


// hi()  //Cannot access 'hi' before initialization
//function as a expression cannot be hoisted 

let hi=function (){
    console.log("hi");
}
// hi()//hi


// greet(); // can be hoisted 

function greet(){
    console.log("greeting");
}


var a = 1;
function b() {
  console.log(a); // Output: undefined
  var a = 2;
}
b();