fetch("person.json")
.then(response=>response.json())
.then(value=>console.log(value))
.catch(error=>console.error(error))


fetch("people.json")
.then(response=>response.json())
.then(value=>console.log(value))
.catch(error=>console.error(error))

// to iterate through the all object values 
fetch("people.json")
.then(response=>response.json())
.then(values=>values.forEach(element => { console.log(element.name);}))
.catch(error=>console.error(error))