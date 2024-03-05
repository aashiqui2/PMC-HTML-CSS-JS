// input events
// var input=document.querySelector('input[type="text"]');
// console.log(input);
// var input=document.querySelector('input[type="email"]');
// console.log(input);

var input=document.querySelector('input[type="text"]');
// console.log(input)
// input.addEventListener("keydown",myfun); //enter any key to check
// input.addEventListener("keyup",myfun); //leave the key to check
input.addEventListener("keypress",myfun); //press the key to check

function myfun(e)
{
    console.log(e.type);
    console.log(e.target);//input tag
    var p=document.querySelector('p');
    p.innerHTML=e.target.value;
}