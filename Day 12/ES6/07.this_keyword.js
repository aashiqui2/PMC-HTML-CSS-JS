// const person={
//     walk(){
//         console.log(this);

//     }
// }

// const person = {
//   walk() {
//     setTimeout(function () {
//         //this standalone or a callback function  will return the timeout Object instead of global object
//       console.log(this);
//     }, 1000);
//   },
// };

// const person = {
//   walk() {
//     var self = this;
//     setTimeout(function () {
//       console.log(self);
//     }, 1000);
//   },
// };

// const person = {
//     walk() {
//       var self = this;// we can omit this line
//       setTimeout( ()=>{
//         console.log(this);
//       }, 1000);
//     },
//   };


person.walk();