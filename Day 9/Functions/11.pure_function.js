// A pure function is a function which:
// given for the same input,always return the same output
// produces no side effect 

let count=0;
const counter=function(value){
    count+=value
    return count;
}
console.log(counter(1));
console.log(counter(1));
