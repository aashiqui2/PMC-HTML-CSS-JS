function printValue(...param){
    console.log(param);
}
printValue(1,2,3,4,5)
printValue("hi","hello","welcome","Goodmorning")//return an array

function sum(...param){
    console.log(param[0]+param[1]+param[2]+param[3]+param[4]);
}
sum(1,2,3,4,5)// return a array

function print(firstArg, ...rest) {
    console.log(firstArg);  //1
    console.log(rest);   //[2,3,4,5] 
  }
  
print(1, 2, 3, 4, 5);


function display(...param){
    console.log(param);
}
const person={
    name:'aashiqui',
    age:22,
}
const person1={
    name:'kumar',
    age:22,
}
display(person,person1)//array of object [ { name: 'aashiqui', age: 22 }, { name: 'kumar', age: 22 } ]

function display1(...props) {
    console.log(props);
  }
  
  const person2 = { name: 'Alice', age: 30, address:{city: 'Wonderland'} };
  display1(person2);




  