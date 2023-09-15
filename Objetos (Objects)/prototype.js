function Persona(nombre , apellido, email){
    this.nombre = nombre,
    this.apellido = apellido,
    this.email = email,
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    }
}

// Este método se usa para agregar una nueva propiedad a la clase sin necesidad de cambiarla cuando la estamos creando en el inicio

Persona.prototype.telefono = 123456

let padre = new Persona('German', 'Martinez', 'gmartinez@mail.com')
let madre = new Persona('Marta', 'Diaz', 'mdiaz@mail.com')

padre.telefono = 908789075
madre.telefono = 387945239

console.log(padre.telefono)
console.log(madre.telefono)