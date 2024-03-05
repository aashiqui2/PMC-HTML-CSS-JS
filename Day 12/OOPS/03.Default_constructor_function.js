//Default constructor
function Person() {
  this.name = "aashiq";
  this.age = 22;
  this.display=function(){
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
const person1 = new Person();
console.log(person1);
person1.display();
//when a new Object is created using the constructor function this keyword refer to the newely created object and the name and age will be added to the person1 object  as a property
//whenever we create a object with new keyword it create a new object and the set the 'this' value to the reference of the  newly created object and it explicitly return the object when we call it inside the log function.

function Student() {
  this.name = "kumar";
  this.age = 24;
  this.display=function(){
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
const person2 = Student();
console.log(person2);
//whenever we create a object without new keyword it does not create a new object and the set the 'this' value to the reference newly created object and it does not explicitly return the object when we call it inside the log function.the default value return is undefined

function Office(){
   this.employee_name="arun";
   this.employee_age=22;
   this.display=function(){
    console.log(`Hello, my name is ${this.employee_name} and I'm ${this.employee_age} years old.`);
  }
   return {employee:"aashiq",age:22}
}

const employee=Office();
console.log(employee);
//we can only implicity return like this but it is not a good practice
