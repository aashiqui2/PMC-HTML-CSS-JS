// message = "Good Global";
// function hello1() {
//   let message = "Good morning";
//   {
//    let message="Good Afternoon"
//     console.log("Hello 1 " + message);
//   }
// //   console.log(message);
// let c=function hello2(){
//     console.log("I am C "+message);
// }
// return c;
// }
// c=hello1();
// c()

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     name="aashiqui"
//     return displayName
//   }
//   let c=init();
//   c()

function returnFunction() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
    //   let a = 2;
      console.log(a);
      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a=999
    y();
  };
  return x;
}

let a = returnFunction();
a()

// function outer(x){
//     function inner(y){
//         return x+y
//     }
//     return inner;
// }
// const outerReturn=outer(10);
// // console.log(outerReturn);//return function
// console.log(outerReturn(2));

// function human(n){
//     const name=n
//     function sayHi(){
//         console.log(`Hi is am ${name}`);
//     }
//     function sayHowYouFeel(){
//         console.log(`${name} is felling good!`);
//     }
//     return {
//         sayHi,
//         sayHowYouFeel
//     }
// }
// const arun=human('arun')//returning object
// const harish=human('harish')//returning object

// Lexical scope, also known as static scope,
// //Another example

// function createCounter() {
//     let count = 0;

//     return function () {
//       // The inner function has access to 'count' from the outer scope
//       return ++count;
//     };
//   }

//   const counter = createCounter();

//   console.log(counter()); // Outputs 1
//   console.log(counter()); // Outputs 2
//   console.log(counter()); // Outputs 3
