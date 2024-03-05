// const person={
//     walk(){
//         console.log(this);

//     }
// }

// const person = {
//   walk() {
//     setTimeout(function () {
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

const person = {
    walk() {
       //var self = this;
      setTimeout( ()=>{
        console.log(this);
      }, 1000);
    },
  };


person.walk();