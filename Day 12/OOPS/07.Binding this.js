const person={
    name:"Mosh",
    walk(){
        console.log(this);
    }
}
person.walk();//object itself

// const walk=person.walk;
// walk();//global object  because this will beacome the standalone function

//every function in javascript is a object this object will have the method and property that we can use
//Bind method is used to set the value of 'this' permananently.
// It creates a new function with a specified `this` value and, optionally, some initial arguments. the function can be invoked later
const walk=person.walk.bind(person);
walk();//object itself