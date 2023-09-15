let persona = {
    nombre: 'German', 
    apellido: 'Martinez', 
    email: 'gmartinez@mail.com',
    edad: 25
}

console.log(persona.apellido)
console.log(persona['apellido'])

// Ciclo for in

for (nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
}