//creation of object  using Object Literal:

let a={
    name:"aashiqui",
    state:"tamilnadu",
}
console.log(a.name);
console.log(a['name']);

a.name="arun";
console.log(a.name);









let student1={
    name:"ram",
    age:30,
    contact:"Chennai",
    address:{
        zipcode:638001,
        state:"Tamilnadu",
        district:"Erode"

    }
}
// dot  notation
console.log(student1.address.state);
// bracket notation
console.log(student1['name']);

let person={
    Fname:"Ram",
    Lname:"Raja",
    age:30,
    address:{
        street:"LGGS Colony",
        city:"Chennai",
        country:"India",
        zipcode:"638091"
    }  
}


//Accessing the object
console.log(person);
console.log(person.Fname); 

let key="age"
console.log(person.key);//undefined
console.log(person[key]);//22

console.log(person["age"]);
// console.log(person[age]); // error because we need to mention double quotes
console.log(person.address.city);

//Updating the Property
person.Lname="babu"
console.log(person.Lname);

//deleting the a property  
delete person.Lname
console.log(person);

// to check whether the property belong to the object -->"Propertyname in  Object"
console.log("Fname" in person);


//Another way to create the object using the new keyword (constructor function)
let student=new Object();

student.name="ashik"
student.age=22
student.regno="21CA003"

console.log(student);



//  we can also create the object like this
let employee=new Object({
    name:"ashik",
    age:22,
    Emp_id:"21CA003"
});
console.log(employee);


