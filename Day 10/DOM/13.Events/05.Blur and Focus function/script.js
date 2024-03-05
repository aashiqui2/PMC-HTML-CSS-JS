// blur and focus event function
var input=document.querySelector('input[type="text');
console.log(input);
// input.addEventListener("focus",myfun);
input.addEventListener("blur",myfun);
function myfun(e)
{
    console.log(e.type);
}


