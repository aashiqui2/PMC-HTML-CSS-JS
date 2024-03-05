function poki()
{
    const input=document.getElementById("poki").value.toLowerCase();

    const response=fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then(function(res){
        if(!response.ok){
            throw new Error("i am error")
        }
        return res.json();
    
    })
    .then(function(data){
       const sprint= data.sprites.front_default;
       const img=document.getElementById("pokimon");
       img.src=sprint;
       img.style.display="block";
    })
    
    .catch(function(value){
        console.log(value);
    })
}

