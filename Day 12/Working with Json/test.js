// function add(a,...Pmc){
//     console.log( a);
//     console.log( Pmc);
// }
// add(1,2,3,4,5); 
// let student={
//     name:"arun",
//     age:30,
//     dept:"MCA"
// }
// let student2={
//     name:"Josuha",
//     age:30,
//     dept:"MCA"
// }
// let student3={
//     name:"deepak",
//     age:30,
//     dept:"MCA"
// }

// function student(name,age,dept){
//     this.name=name;
//     this.age=age; 
//     this.dept=dept;
// //     this.printName=function(){console.log(`${this.name}`);}
// // }

// // class student{
// //     constructor(name,age,dept){
// //         this.name=name;
// //         this.age=age;
// //         this.dept=dept;
// //     }   
// // }
// // const st1=new student("arun",20,"MCA");
// // const st2=new student("RAHUl",20,"MCA");
// // const st3=new student("gowtham",20,"MCA");
// // st1.printName();
// // console.log(st1.name);

// function printName(fname,lname){
//     this.fname=fname;
//     this.lname=lname;
//     this.fullname=function(){
//         return this.fname+this.lname;
//     }
// }
// const a=new printName("arun","sharma");
// let b=a.fullname();
// console.log(b);

const superHeros = ["IronMan", "SpiderMan", "SuperMan"];
console.log(superHeros);
const a=JSON.stringify(superHeros);
console.log(a);
let b=a.replace("SuperMan","Hulk");
console.log(b);

// parse
let c=JSON.parse(b);
console.log(c);

