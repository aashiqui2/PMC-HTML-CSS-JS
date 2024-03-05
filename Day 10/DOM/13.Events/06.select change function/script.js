// select event function
var select=document.querySelector("select");
select.addEventListener("change",myfun);
function myfun(e)
{
    console.log(e.type);
}

// submit event function
var submit=document.querySelector("form");
submit.addEventListener("submit",myfun);
function myfun(e)
{
    // if we didnt use we cant see the output on time it come and goes like minnal(lighthning)
    e.preventDefault();
    console.log(e.type);
}