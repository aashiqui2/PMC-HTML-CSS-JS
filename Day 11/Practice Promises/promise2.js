let p=new Promise(function(resolve,reject){
    console.log("Promise is Pending");
    setTimeout(()=>{
        // console.log("I am a Promise and I am resolved");
        resolve(true)

    },4000)
});
let p1=new Promise(function(resolve,reject){
    console.log("Promise is Pending");
    setTimeout(()=>{
        // console.log("I am a Promise and I am rejected");
        reject(new Error("i am an Error"))

    },4000)
});
// console.log(p,p1);
p.then(function(value){
console.log(value);
})
p1.catch(function(error){
console.log(error);
})
