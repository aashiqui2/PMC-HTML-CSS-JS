//setInterval(cb,2000)

function greet(){
    console.log("hi");
}

let timer=setInterval(greet,1000)
console.log(timer)

setTimeout(function(){
    clearInterval(timer)
},5000)
 



