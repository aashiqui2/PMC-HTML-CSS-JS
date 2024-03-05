console.log("iam nobody");

// get->by default it is get
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(res){
//     // console.log(res);
//     return res.json();
// }).then(function(data){
//     console.log(data);
// })
// post
const data={
    title:"Hi i am title",
    body:"This is post body",
    userId:2
}

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        "Content-type":"application/json"
    }
}).then(function(res){
    return res.json()
}).then (function(data) {
    console.log(data);
    
})