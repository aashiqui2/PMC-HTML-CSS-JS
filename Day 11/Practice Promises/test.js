// // function add(){
// //     //code
// // }
// // // calling
// // add()

// // let a={
// //     name:"arun",
// //     age:30,
// //     address:"chennai"
// // }
// // console.log(a['name']);
// // console.log(a.name);

// // let b=[1,2,3,"false",false];
// // b[0]="arun"
// // console.log(b);

// // const student={

// //     name:"kumar",
// //     department:"CSE",
// //     regno:123,
// //     print:function(){
// //         console.log("I am printer");
// //     }

// // }
// // student.print();

// // // assigning function to variable==
// // // anonymous function
// // let browser=function(){
// //     console.log("I am browser");
// // }
// // // standalone function
// // browser();

// // function printer(b){
// //     console.log(b);
// // }
// // function addition(n1,n2,myCallback){
// //     let sum=n1+n2;
// //     // console.log(sum);
// //     myCallback(sum);
// // }
// // addition(5,4,printer);

// // console.log("Hello");
// // console.log("I am first");
// // setTimeout(function(){
// // console.log("I am second");
// // },4000);
// // console.log("i am fourth");

// // console.log("I");
// // // This will be shown after 2 seconds
// // setTimeout(function(){
// //   console.log("eat");
// // },2000)
// // console.log("Ice Cream")

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };
//  let production=()=>{
//     setTimeout(()=>{
//         console.log("The production has started");
//         setTimeout(()=>{
//             console.log("The fruit has been chopped");
//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);
//                 setTimeout(()=>{
//                     console.log("start the machine");
//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.holder[1]}`);
//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} as Topping`);
//                             setTimeout(()=>{
//                                 console.log("Icecream served");
//                             },1000)
//                         },3000)
//                     }, 2000);
//                 },1000)
//             },1000)
//         },2000)
//     },0)

//  }
//  production();

// //  setTimeout(function(){
// //     console.log("Place the order");
// //     setTimeout(function()
// //     {
// //         console.log("Cut the fruits");
// //         setTimeout(function()
// //         {
// //             console.log("Add water and Ice");
// //             setTimeout(function(){
// //                 console.log("Start the machine");
// //                 setTimeout(function(){
// //                     console.log("select the container");
// //                     setTimeout(function(){
// //                         console.log("select Topping");
// //                         setTimeout(function(){
// //                             console.log("Serve the iceCream");
// //                         },2000)
// //                     },3000)
// //                 },2000)
// //             },1000)
// //         },1000)
// //     },2000)
// //  },2000)

// let myPromise=new Promise(function(resolve,reject){
//     console.log("I am pending");
//     setTimeout(()=>{
//         // console.log("I am from resolved");
//         resolve(true)
//     },2000)
// }).then(function(value){
//     console.log(value);
// })
// let myPromise1=new Promise(function(resolve,reject){
//     console.log("I am pending");
//     setTimeout(()=>{
//         // console.log("I am from resolved");
//         reject(new Error("i am error"))
//     },2000)
// }).catch(function(value){
//     console.log(value);
// })

// console.log(myPromise);
// console.log(myPromise1);

// es6 arrow function

let a = () => {
  console.log("adding");
};
let p = new Promise((resolve, reject) => {
  console.log("I am promise");
  setTimeout(() => {
    resolve("I am resolved");
  }, 2000);
}).then((data) => {
  return data;
});

let c = new Promise((resolve, reject) => {
  console.log(" i am another promise from reject");
  setTimeout(() => {
    reject(new Error("i am failed"));
  }, 2000);
}).catch(function (errmsg) {
  return errmsg;
});

console.log(p);
console.log(c);
