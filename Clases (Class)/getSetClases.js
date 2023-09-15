class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(nuevoApellido){
        this._apellido = nuevoApellido
    }
}

persona1 = new Persona('German', 'Martinez')

console.log(persona1)
console.log(persona1.nombre)
console.log(persona1.apellido)

persona1.nombre = 'Marta'
persona1.apellido = 'Diaz'

console.log(persona1.nombre)
console.log(persona1.apellido)