var form=document.getElementById("addForm");
var ul=document.getElementById("ul");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var input=document.getElementById("input").value;
    var li=document.createElement("li");
    li.className="list-group-item";
    li.innerHTML=input;

    var button=document.createElement("button");
    button.className="btn btn-primary  float-end";
    button.innerHTML="X";

    li.appendChild(button);
    ul.appendChild(li);

});

ul.addEventListener("click",(e)=>{
    // console.log(e.target.classList);
    if(e.target.classList.contains("btn")){
       var li=e.target.parentElement;
       ul.removeChild(li);
    }
})