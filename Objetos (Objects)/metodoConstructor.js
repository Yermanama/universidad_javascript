// Funcion constructor de objetos de tipo persona
function Persona(nombre , apellido, email){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
}

let padre = new Persona('German', 'Martinez', 'gmartinez@mail.com')

console.log(padre)

let madre = new Persona('Marta', 'Diaz', 'mdiaz@mail.com')

console.log(madre)

padre.nombre = 'Carlos'

console.log(padre)
console.log(madre)