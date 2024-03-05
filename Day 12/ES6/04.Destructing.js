// // it is used to unpack values from arrays or properties from object and arrays
// // // array 
// // let arr=["aashiqui","arun","Deva"];
// // let [a,b,c,d]=arr;
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);

// //Object
const myobj={
    name:'aashiqui',
}
let {name:fl}=myobj;
console.log(fl);


// const person={
//     name:"aashiqui",
//     age:22,
//     address:{
//         city:"erode",
//         state:"Tamilnadu"
//     }
// }


// const {name,age,address:{city,state}}=person;
// console.log(name);
// console.log(age);
// // console.log(address);
// console.log(city);
// console.log(state);

let a=["purusothama","thirumoorthy","Aravindh","Thendralvasan"];
let [c,d,e,f]=a;
console.log(c);
console.log(d);
console.log(e);
console.log(f);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);




// let len=a.length;
// for(let i=0;i<len;i++){
//     console.log(a[len-i-1]);
// }