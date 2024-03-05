let mark1=10
let mark2=30
let sum=function(m1,m2){
    return m1+m2;

}
let total=sum(mark1,mark2);

let average=function(t1){
    return t1/2;
}
let result=average(total);
console.log(result);

// In JavaScript, when you use the return statement without specifying any value, it essentially means that the function is returning undefined. If no value is provided after return, the function will exit, and undefined will be implicitly returned.

function exampleFunction() {
    // No value specified after return
    return;
  }
  
  const result1 = exampleFunction();
  console.log(result1); 

  //fuctuon can return a function

  function fn1(x){
    function fn2(y){
        return x+y 
    }
    return fn2
}
let result2=fn1(2)
console.log(result2);
console.log(result2(3));
  