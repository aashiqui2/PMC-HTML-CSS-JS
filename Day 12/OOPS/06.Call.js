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

// call method
// person1.printDetails.call(person2);
// printDetails.call(person2);
printDetails1.call(person1,'hello','newYork')
printDetails1.call(person2,'hi','erode')

// 1. **`call` method:**
//    - **Purpose:** It allows you to invoke a function with a specified `this` value and individual arguments provided one by one.
//    - **Use Case:** Useful when you know the arguments that need to be passed to the function and you want to explicitly set the `this` value.

// / Here's a brief summary:

// - **`call`:** Explicitly sets the `this` value and passes arguments individually.
// - **`apply`:** Explicitly sets the `this` value and passes arguments as an array.
// - **`bind`:** Creates a new function with a specified `this` value and optional initial arguments, without immediately invoking the function.

// These methods provide flexibility and control in various programming scenarios.