let person1={
    name:"Adam",
    age:22,
    // printDetails:function(){
    //     console.log(`i am ${this.name} and my age is ${this.age}`);
    // }
}

let printDetails=function(){
    console.log(`i am ${this.name} and my age is ${this.age}`);
}
let printDetails1=function(city,greeting){
    console.log(`i am ${this.name} and my age is ${this.age} and ${greeting} and ${city}`);
}

let person2={
    name:"Arun",
    age:23,
    // printDetails:function(){
    //     console.log(`i am ${this.name} and my age is ${this.age}`);
    // }
}

//bind method
let a=printDetails.bind(person1,'hii','erode')
a()

// 1. **`bind` method:**
//    - **Purpose:** It creates a new function with a specified `this` value and, optionally, some initial arguments. Unlike `call` and `apply`, it does not immediately invoke the function but returns a new function that can be invoked later.
//    - **Use Case:** Useful when you want to create a partially applied function with a specific `this` value and some fixed initial arguments. This is often used in event handlers or when passing functions as callbacks.

// / Here's a brief summary:

// - **`call`:** Explicitly sets the `this` value and passes arguments individually.
// - **`apply`:** Explicitly sets the `this` value and passes arguments as an array.
// - **`bind`:** Creates a new function with a specified `this` value and optional initial arguments, without immediately invoking the function.

// These methods provide flexibility and control in various programming scenarios.