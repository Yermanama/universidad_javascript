let persona = {
    nombre: 'German', 
    apellido: 'Martinez', 
    email: 'gmartinez@mail.com',
    edad: 25,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.persona
    }
}


// concatenar cada valor de cada propiedad
console.log( persona.nombre+ ',' + persona.apellido)

// for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}


// Accediendo a los valores en lista
let personaArray = Object.values(persona)
console.log(personaArray)

// Accediendo a la propiedad JSON y pasándolo a string
let personaString = JSON.stringify(persona)
console.log(personaString)