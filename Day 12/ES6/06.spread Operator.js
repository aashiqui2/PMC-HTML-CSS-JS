
//value coping -while dealing with primitive types such as(number,string,boolean)
// let a=2
// let b=a
// console.log(a);
// console.log(b);
// a=3
// console.log(a);
// console.log(b);

//reference Copying

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4)
// console.log(arr1); 
// console.log(arr2); 

// function modifyArray(arr) {
//     arr.push(99);
//   }
//   let originalArray = [1, 2, 3];
//   modifyArray(originalArray);  
//   console.log(originalArray); 

let arr1 = [1, 2, 3,[2,1]];
let arr2 =[...arr1,99]
console.log(arr2); 
arr2[3][0]=22
console.log(arr1); 
console.log(arr2); 

// let arr1 = [1, 2, 3,[2,1]];
// let arr2 =arr1.slice()
// console.log(arr2); 
// arr2[3][0]=22
// console.log(arr1); 
// console.log(arr2); 


// const firstPerson={
//     name:"Adam",
//     age:22,
//     address:{
//         city:"lucknow",
//         zip:638002
//     }
// }
// //spread Operator
// const secondPerson={...firstPerson}
// console.log(secondPerson);
// firstPerson.address.city='londan'
// console.log(firstPerson);
// console.log(secondPerson);



  