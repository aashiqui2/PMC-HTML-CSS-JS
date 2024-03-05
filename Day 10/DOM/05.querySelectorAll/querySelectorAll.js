// returns a list of all those nodes(NodeList)

// var list=document.querySelectorAll("li");
// console.log(list);


// we can also pass the class name and id inside it 
// var list=document.querySelectorAll(".list");
// var list=document.querySelectorAll("#name");
// console.log(list);

var list =document.querySelectorAll('.list-items');
console.log(list);
for(let i=0;i<list.length;i++)
{
    list[i].style.backgroundColor="red";
    list[i].style.fontSize="25px";
    // list[i].innerHTML="Fruits";
}
var list1 =document.querySelectorAll('.list');
console.log(list1);
list1[0].style.border="8px solid green";
list1[0].style.marginTop="16px";
