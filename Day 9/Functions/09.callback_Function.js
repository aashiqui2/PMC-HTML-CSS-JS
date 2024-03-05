
// Example of a simple callback function
function doSomethingAsync(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function () {
      console.log("Task completed!");
      callback(); // Calling the callback function after the task is completed
    }, 1000);
  }
  
  // Using the callback function
  doSomethingAsync(function () {
    console.log("Callback executed!");
  });







// Example 
// function sumCallback(sum,currentValue){
//     return sum+currentValue
// }

// function sumNaturalNumber(num,callback){
//     let sum=0

//     for(let i=1;i<=num;i++){
//         sum=callback(sum,i)
//     } 
//     return sum
// }

// console.log(sumNaturalNumber(5,sumCallback));