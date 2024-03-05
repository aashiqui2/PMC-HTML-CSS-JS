// const person={
//     name:'aashiqui',
//     Walk(){
//         console.log('hi');
//     }
// }
// const person1={
//     name:'aashiqui',
//     Walk(){
//         console.log('hi');
//     }
// }

// class Person{
//     constructor(name){
//         this.name=name
//     }

//     Walk(){
//         console.log('walk');
//     }
// }

// const person=new Person('aashiqui')
// const person=Person('aashiqui');//error->Class constructor Person cannot be invoked without 'new'(both in node and browser will throw an error)
 ////because 'Person' is not an instance of Animal
// console.log(person);
// person.Walk();

// function Animal(name, sound) {
//   this.name = name;
//   this.sound = sound;
// }
// // Without using 'new' keyword, 'this' will refer to the global object
// const dog = Animal("Dog", "Woof");
// // 'dog' is now undefined because Animal did not return anything
// console.log(dog); // undefined
// console.log(globalThis);
// // 'name' and 'sound' properties are added to the global object
// console.log(name);
// console.log(sound);


// function AnimalExplicit(name, sound) {
//    //// 'this' refers to the newly created object when using 'new'
//     this.name = name;
//     this.sound = sound;
//     // //Explicit return statement returning an object
//     return { type: 'Animal', name: 'Generic' };
//   }
  
//   const dogExplicit = AnimalExplicit('Dog', 'Woof');
  
//   console.log(dogExplicit); // The object returned explicitly by the AnimalExplicit constructor
  
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         // return {type: 'Animal', name: 'Generic'}
//     }
// }
//this is not possible
// const obj= Person('kumar',22)
// console.log(obj);

// class Inheritance

// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
  
//     present() {
//       return 'I have a ' + this.brand;
//     }
//   }
  
//   class Model extends Car {
//     constructor(name, mod) {
//       super(name);
//       this.model = mod;
//     }  
//     show() {
//         return this.present() + ', it is a ' + this.model
//     }
//   }
//   const mycar = new Model("Ford", "Mustang");
//   mycar.show();