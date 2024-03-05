let practice=new Promise(function(resolve,reject){
    console.log("I am promise");
    resolve(56)
});
console.log("I am first");
setTimeout(()=>{
    console.log("Hello i am late");
},2000)

console.log(" I am last");
console.log(practice);