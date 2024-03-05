let myPromise = new Promise(function (resolve, reject) {
  const a = 4;
  const b = 3;
  setTimeout(()=>{
    if(a===b){
        resolve('The value is equal')
    }
    else{
        reject('the value is not equal')
    }
  },2000)
});


//pending  Promise { <pending> }
// console.log(myPromise);

//fullfilled -then method
myPromise.then(function(result){
    console.log(result);
})//full fuilled state


//reject state
myPromise.catch(function(err){
    console.log(err);
})




