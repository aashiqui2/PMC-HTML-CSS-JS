//Javascript method is an object property which contain the function definitions
const person={
    name:"elon",
    age:22,
    greet:function greeting(){
        console.log("hello");
    },
    eat:function()
    {
        console.log("Eating");
    },
    fun(){
        console.log("Have fun");

    }
}
    
      
function sayHi(){
    console.log("Hi");
}
person.Himsg=sayHi;
person.greet();
person.Himsg();
person.fun();
person.eat();
console.log(person);


