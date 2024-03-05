// function myfunction()
// {
//     // console.log("I am clicked");\
//     alert("i am clicked");
// }

// new method
// var button=document.querySelector("button");
// button.addEventListener("click",()=>{
//     console.log("Javascript");

// })

//use this also
// var button=document.querySelector("button");
// button.addEventListener("click",doremon);
// function doremon()
// {
//     console.log("hi i am Doremon");
// }


var button=document.querySelector("button");
button.addEventListener("click",bg);
function bg(){
    var listItem=document.getElementsByClassName("list-items");
    console.log(listItem);
    for(let i=0;i<listItem.length;i++)
    {
        listItem[i].style.backgroundColor="red";
        listItem[i].style.margin="2px";
        listItem[i].innerHTML="Nobita";
        listItem[i].style.color="yellow";
    }
}