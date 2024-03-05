// selectors
// getElementById();
var list=document.getElementById("list");
console.log(list);
// this will give attaintion to the style part
list.innerText="HELLO";
// this will not give attaintion to the style part
list.textContent="Hey";

// lets check
var head=document.getElementById('heading');
console.log(head.textContent);
console.log(head.innerText);