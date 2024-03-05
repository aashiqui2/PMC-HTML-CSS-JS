//Parameterized constructor
 function Student(_name,_age){
   this.name=_name
   this.age=_age;;
   this.display=function(){
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
   }
}
//we can create multiple object for the same type with different property value also using the constructor function parameter
const student1=new Student("aashiqui","22")
//adding new property to the object
student1.city="erode"
console.log(student1);
student1.display();
//to add method to in the object
student1.Greeting=function(){
  console.log("Hello students");
}
console.log(student1);
 student1.Greeting();


