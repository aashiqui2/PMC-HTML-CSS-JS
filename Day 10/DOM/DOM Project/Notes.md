**step1**
`follow this steps`

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Simple To-do List</title>
    <style></style>
  </head>
  <body>
    <script src="./script.js"></script>
  </body>
</html>

**step2**
`follow this steps`

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Simple To-do List</title>
    <style></style>
  </head>
  <body>
   ***<div class="container my-5">
      <form id="addForm">
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Enter the items" />
        </div>
        <button type="submit" class="btn btn-primary my-5">Submit</button>
      </form>
    </div>***
    <script src="./script.js"></script>
  </body>
</html>

**step3**
`follow this steps`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Simple To-do List</title>
    <style></style>
  </head>
  <body>
    <div class="container my-5">
      <form id="addForm">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter the items"
          />
        </div>
        <button type="submit" class="btn btn-primary my-5">Submit</button>
      </form>
     **** <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>****
    </div>
    <script src="./script.js"></script>
  </body>
</html>

**step4**
`follow this steps`
`add it to the form`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Simple To-do List</title>
    <style></style>
  </head>
  <body>
    <div class="container my-5">
      <form id="addForm">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter the items"
          />
        </div>
        <button type="submit" class="btn btn-primary my-5">Submit</button>
      </form>
      <ul class="list-group list-group-flush" id="list">
        <li class="list-group-item">An item  <button class="btn btn-danger float-end">X</button></li>
        <li class="list-group-item">A second item <button class="btn btn-danger float-end">X</button></li>
        <li class="list-group-item">A third item <button class="btn btn-danger float-end">X</button></li>
        <li class="list-group-item">A fourth item <button class="btn btn-danger float-end">X</button></li>
        <li class="list-group-item">And a fifth one <button class="btn btn-danger float-end">X</button></li>
      </ul>
    </div>
    <script src="./script.js"></script>
  </body>
</html>


**step5**

`go to the js file`
var form=document.getElementById("addForm");
var listItem=document.getElementById("list");


**step 6**
`add id to the input tag`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Simple To-do List</title>
    <style></style>
  </head>
  <body>
    <div class="container my-5">
      <form id="addForm">
        <div class="mb-3">
          <input id="item"
            type="text"
            class="form-control"
            placeholder="Enter the items"
          />
        </div>
        <button type="submit" class="btn btn-primary my-5">Submit</button>
      </form>
      <ul class="list-group list-group-flush" id="list">
        <li class="list-group-item">An item  <button class="btn btn-danger float-end">X</button></li>
        <li class="list-group-item">A second item <button class="btn btn-danger float-end">X</button></li>
        <li class="list-group-item">A third item <button class="btn btn-danger float-end">X</button></li>
        <li class="list-group-item">A fourth item <button class="btn btn-danger float-end">X</button></li>
        <li class="list-group-item">And a fifth one <button class="btn btn-danger float-end">X</button></li>
      </ul>
    </div>
    <script src="./script.js"></script>
  </body>
</html>

**step 7**:
var form=document.getElementById("addForm");
var listItem=document.getElementById("list");

form.addEventListener("submit",myfun);
function myfun(e)
{
    e.preventDefault();
    var newItem=document.getElementById("item");
    console.log(newItem);
}

**step8**:
var form=document.getElementById("addForm");
var listItem=document.getElementById("list");
form.addEventListener("submit",myfun);
function myfun(e)
{
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    console.log(newItem);
}

**step9**:
var form=document.getElementById("addForm");
var listItem=document.getElementById("list");

form.addEventListener("submit",myfun);
function myfun(e)
{
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    // console.log(newItem);
    var li=document.createElement('li');
    li.className="list-group-item";
    li.innerHTML=newItem;
}

**step 10**:
var form=document.getElementById("addForm");
var listItem=document.getElementById("list");

form.addEventListener("submit",myfun);
function myfun(e)
{
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    // console.log(newItem);
    var li=document.createElement('li');
    li.className="list-group-item";
    li.innerHTML=newItem;

    var button=document.createElement('button');
    button.className="btn btn-danger float-end";
    button.innerHTML="X";
}

**step 11**:
var form=document.getElementById("addForm");
var listItem=document.getElementById("list");

form.addEventListener("submit",myfun);
function myfun(e)
{
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    // console.log(newItem);
    var li=document.createElement('li');
    li.className="list-group-item";
    li.innerHTML=newItem;

    var button=document.createElement('button');
    button.className="btn btn-danger float-end";
    button.innerHTML="X";


    li.appendChild(button);
    listItem.appendChild(li);
}

listItem.addEventListener("click",myfun);
function myfun(e)
{
    console.log(e.target);
}

**step 12:**
var form=document.getElementById("addForm");
var listItem=document.getElementById("list");

form.addEventListener("submit",myfun);
function myfun(e)
{
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    // console.log(newItem);
    var li=document.createElement('li');
    li.className="list-group-item";
    li.innerHTML=newItem;

    var button=document.createElement('button');
    button.className="btn btn-danger float-end";
    button.innerHTML="X";


    li.appendChild(button);
    listItem.appendChild(li);
}

listItem.addEventListener("click",myfun);
function myfun(e)
{
    // console.log(e.target);
    console.log(e.target.classList);//this will return an dom tokenlist
    if(e.target.classList.contains('btn')){
        var li=e.target.parentElement;
        console.log(li);
        listItem.removeChild(li);
    }

}

**step13:**
var form = document.getElementById("addForm");
var listItem = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  // console.log(newItem);
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = newItem;

  var button = document.createElement("button");
  button.className = "btn btn-danger float-end";
  button.innerHTML = "X";

  li.appendChild(button);
  listItem.appendChild(li);
});
listItem.addEventListener("click", (e) => {
  // console.log(e.target);
//   console.log(e.target.classList); //this will return an dom tokenlist
  if (e.target.classList.contains("btn")) {
    var li = e.target.parentElement;
    //         console.log(li);
    listItem.removeChild(li);
  }
});






