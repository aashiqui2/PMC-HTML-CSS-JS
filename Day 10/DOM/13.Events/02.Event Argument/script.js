// evenet argument
var button=document.querySelector("button");
button.addEventListener("click",myFun);
function myFun(e)
{
    console.log(e);
}

var h1=document.createElement("h1");
var text=document.createTextNode("Hi My name is nobita");
h1.appendChild(text);
console.log(h1);
var body=document.querySelector("body");
body.appendChild(h1)

h1.id="title";
var button=document.querySelector("button");
button.addEventListener("click",myfun1);
function myfun1(e)
{
    var title=document.getElementById("title");
    title.innerHTML=e;
    console.log(e);

    title.innerHTML=e.type;
    console.log(e.click);

    title.innerHTML=e.target;
    console.log(e.target);

    // to check the class name
    title.innerHTML=e.target.className;
    console.log(title.innerHTML=e.target.className);

    title.innerHTML=e.target.id;
    console.log(title.innerHTML=e.target.id);
// BOM
    title.innerHTML=e.clientX;
    console.log( title.innerHTML=e.clientX);

    title.innerHTML=e.clientY;
    console.log( title.innerHTML=e.clientY);

    title.innerHTML=e.offsetX;
    console.log(title.innerHTML=e.offsetX);

    title.innerHTML=e.altKey;
    console.log(title.innerHTML=e.altKey);

    title.innerHTML=e.shiftKey;
    console.log(title.innerHTML=e.shiftKey);

}