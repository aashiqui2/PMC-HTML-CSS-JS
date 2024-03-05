// mouseEvent

// var newElement=document.getElementById("newElement");
// newElement.addEventListener("mousedown",myfun);
// newElement.addEventListener("mouseup",myfun);
// newElement.addEventListener("mouseenter",myfun);
// newElement.addEventListener("mouseout",myfun);
// newElement.addEventListener("mouseleave",myfun);
// function myfun(e)
// {
//     console.log(e.type);
// }




// to change the background color of the div
// useing click event
// var newElement=document.getElementById("newElement");
// newElement.addEventListener("click",myfun);
// function myfun(e)
// {
//     newElement.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",23)";
//     console.log(offsetX);
//     console.log(offsetY);
// }


//mouseleave event
// var newElement=document.getElementById("newElement");
// newElement.addEventListener("mouseleave",myfun);
// function myfun(e)
// {
//     newElement.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",23)";
//     console.log(offsetX);
//     console.log(offsetY);
// }


// using the click event in the body
var newElement=document.getElementById("newElement");
newElement.addEventListener("click",myfun);
function myfun(e)
{
    var body=document.querySelector("body");
    body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",23)";
    console.log(offsetX);
    console.log(offsetY);
}