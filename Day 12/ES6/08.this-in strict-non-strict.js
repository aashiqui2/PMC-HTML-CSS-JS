// console.log(this); //{} window object

// 'use strict'
// console.log(this); //{} window object


// function hello(){
//     console.log(this); //global object window object
// }
// hello()

// 'use strict'
// function hello(){
//     console.log(this); //undefined //undefined
// }
// hello()


// let person={
//     name:'aashiqui',
//     walk:function(){
//         console.log(this);
//     }
// }
// person.walk();//object itself  object itself

// 'use strict'
// let person={
//     name:'aashiqui',
//     walk:function(){
//         console.log(this);
//     }
// }
// person.walk(); object itself  object itself


// let person={
//         name:'aashiqui',
//         walk:function(){
//             function hello(){
//                 console.log(this);
//             }
//             hello()
//         }
//     }
// person.walk() //global object window object

// 'use strict'
// let person={
//     name:'aashiqui',
//     walk:function(){
//         function hello(){
//             console.log(this);
//         }
//         hello()
//     }
// }
// person.walk() //undefined undefined





