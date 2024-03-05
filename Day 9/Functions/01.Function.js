
function greet(){
    console.log("greeting");
}

//calling or invoking
greet()

//function function_name(parameter1,...)
function greet1(fname,lname){
    console.log(fname+" "+lname);
}
// function_name(agrument1,...)
greet1("arun","kumar")

function greet2(fname,lname){
    console.log(fname+" "+lname);
}

greet2("arun")

function greet3(fname,lname="prasath"){
    console.log(fname+" "+lname);
}

greet3("arun")

