// THis keyword
// To access the other property of the object within a method of the same object we can use this keyword  
const person={
    Firstname:"arun",
    Lastname:"sharma",
    getFullName:function(){
        return this.Firstname+" "+this.Lastname;
    }
}

console.log(person.getFullName());