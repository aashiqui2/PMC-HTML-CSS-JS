let person1={
    name:"Adam",
    age:22,
    // printDetails:function(){
    //     console.log(`i am ${this.name} and my age is ${this.age}`);
    // }
}

// let printDetails=function(){
//     console.log(`i am ${this.name} and my age is ${this.age}`);
// }
let printDetails=function(city,greeting){
    console.log(`i am ${this.name} and my age is ${this.age} and ${greeting} and ${city}`);
}

let person2={
    name:"Arun",
    age:23,
    // printDetails:function(){
    //     console.log(`i am ${this.name} and my age is ${this.age}`);
    // }
}

//apply method
// printDetails.apply(person2,['hi','erode'])

// person1.printDetails()
// person2.printDetails()





// 1. **`apply` method:**
//    - **Purpose:** Similar to `call`, it allows you to invoke a function with a specified `this` value, but the arguments are passed as an array or array-like object.
//    - **Use Case:** Useful when the number of arguments is dynamic or when the arguments are already available in an array.



// These methods are particularly handy in scenarios where you need fine-grained control over the `this` value or want to partially apply arguments to a function. They are commonly used in situations like working with object-oriented code, event handling, and callback functions.

// Here's a brief summary:

// - **`call`:** Explicitly sets the `this` value and passes arguments individually.
// - **`apply`:** Explicitly sets the `this` value and passes arguments as an array.
// - **`bind`:** Creates a new function with a specified `this` value and optional initial arguments, without immediately invoking the function.

// These methods provide flexibility and control in various programming scenarios.