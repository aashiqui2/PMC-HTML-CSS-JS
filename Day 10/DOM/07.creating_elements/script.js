// creating elements
var h1=document.createElement('h1');
console.log(h1);
h1.className="heading";
h1.id="heading1";
h1.setAttribute('title','i am heading');//hover and check

// to create a text content inside the tag
var headingText=document.createTextNode("This is My heading");
h1.appendChild(headingText);


// to get the element on the document
// error oops
// var newElement=document.getElementsByClassName('myDiv');
// var newElement=document.getElementById("myDiv");
// console.log(newElement);
// newElement.innerHTML=h1;

// inserting inside the document 
// var body=document.querySelector("body");
// var p=document.querySelector("p");
// body.insertBefore(h1,p);

// to add before input
// var body=document.querySelector("body");
// var input=document.querySelector("input");
// body.insertBefore(h1,input);



