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
    nombreCompleto(){
        return this.nombre + ' ' + this.apellido
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


let empleado1 = new Empleado('German', 'Martinez', 'Sistemas')

console.log(empleado1.nombreCompleto())