function poki(){
const pokimonname=document.getElementById("poki").value.toLowerCase();
const response=  fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonname}`)
    // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    // fetch("https://pokeapi.co/api/v2/pokemon/smush")
    .then(function(response){
        console.log(response);
        if(!response.ok){
            throw new Error("Sry");
        }
        return response.json();
    
    })
    .then(function(data){
        console.log(data);
        // console.log(data.id);
        const pokemonsprit=data.sprites.front_default;
        const img=document.getElementById("pokimon");
        img.src=pokemonsprit;
        img.style.display="block";
    })
    .catch(function(error){
        console.log(error);
    })
       
}

