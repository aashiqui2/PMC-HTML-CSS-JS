// getElementsByClassName();
var listItem=document.getElementsByClassName("list-items");
//returns an HTML Collection you can access by using the index
console.log(listItem);
console.log(listItem[0]);
console.log(listItem[1]);
console.log(listItem[2]);
console.log(listItem[3]);
console.log(listItem[0].innerHTML);
listItem[1].style.color="red";
// listItem[2].style.color="#a5ffc4";
listItem[0].style.backgroundColor="#a5ffc4";

// for(let i=0;i<listItem.length;i++)
// {
//     listItem[i].style.color="red";
//     listItem[i].style.fontSize="25px";
//     // listItem[i].innerHTML="FRUITS";

// }