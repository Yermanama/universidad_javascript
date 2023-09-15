class Persona{
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

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento
    }
    set departamento(nuevoDepartamento){
        this._departamento = nuevoDepartamento
    }
}

// Creamos un objeto de la clase padre

let persona1 = new Persona('german', 'martinez')
console.log(persona1)

let empleado1 = new Empleado('german', 'martinez', 'junior developer')
console.log(empleado1)

console.log(empleado1.nombre)
console.log(empleado1.apellido)
console.log(empleado1.departamento)