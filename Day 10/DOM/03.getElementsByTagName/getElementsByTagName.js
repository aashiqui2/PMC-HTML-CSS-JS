// getElementsByTagName();
//this will return a html collection
// var input=document.getElementsByTagName("input");
var input=document.getElementsByTagName("ul");
// var input=document.getElementsByTagName("li");
console.log(input);

// changing the content 
input[0].style.backgroundColor="red";

for(let i=0;i<input.length;i++)
{
    input[i].style.color="yellow";
}