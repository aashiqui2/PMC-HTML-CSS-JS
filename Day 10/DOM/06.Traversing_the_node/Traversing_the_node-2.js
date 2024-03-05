// firstChild
// firstElementChild
// lastChild
// lastElementChild
// previousSibling
// previousElementSibling
// nextSibling
// nextElementSibling
let a=document.body
console.log(a.firstChild);
console.log(a.firstElementChild);
console.log(a.lastChild);
console.log(a.lastElementChild);
console.log(a.previousSibling);
console.log(a.previousElementSibling);
// cannot target with class name
// console.log(document.getElementsByClassName("list-items").nextSibling)
// console.log(document.getElementsByClassName("list-items").nextElementSibling)

// target with id
console.log(document.getElementById("list-items").nextSibling)
console.log(document.getElementById("list-items").nextElementSibling)


// Guess the output
var list=document.querySelector("#list");
// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(list.lastChild);
// console.log(list.lastElementChild);
// console.log(list.previousElementSibling);
// console.log(list.previousSibling);
console.log(list.nextSibling)
console.log(list.nextElementSibling)

