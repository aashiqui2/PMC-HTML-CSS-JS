// classic inheritance

class Animal{
    constructor(name){
        this.name=name;
    }

    display(){
        console.log("i am animal ",this.name);
    }
}

class Dog extends Animal{
    constructor(name,sound){
        super(name);
        this.sound=sound;

    }
    eat(){
        console.log("i am eating Biscuit");
    }
}


// const dog=new Animal('dog')
// console.log(dog);
// dog.display();


const dog=new Dog('husky','woof')
console.log(dog.name);
console.log(dog.sound);