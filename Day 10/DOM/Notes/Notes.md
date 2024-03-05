**open console:**
window 

it is a global objectso we dont have to declare that window. document in console.

document is a object inside the document object

// console.log(document.getElementById('heading'));
window.addEventListener("DOMContentLoaded",()=>{
    console.log(document.getElementById('heading'));
})

//now once i give this `window.addEventListener`,this dom content will load all our element even before the css and image get loaded.

**to change the title use**
`document.title="hello wolrd"`


**to get the width of the document**
`innerWidth`
