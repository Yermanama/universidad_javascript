function Persona(nombre , apellido, email){
    this.nombre = nombre,
    this.apellido = apellido,
    this.email = email,
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    }
}

let padre = new Persona('German', 'Martinez', 'gmartinez@mail.com')
let madre = new Persona('Marta', 'Diaz', 'mdiaz@mail.com')

console.log(madre.nombreCompleto())
console.log(padre.nombreCompleto())