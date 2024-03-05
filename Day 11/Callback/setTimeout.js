// setTimeout(cb,2000)

console.log('Before');


function greet(){
    console.log("greeting");
}
setTimeout(greet,2000)

console.log('After');