class Persona{

    // Atributos estáticos de la clase -> Los de definimos con static
    static contadorPersonas = 0;

    constructor(nombre, apellido){
        this.idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre 
        this._apellido = apellido
    }
    get apellido(){
        return this._apellido
    }
    get nombre(){
        return this._nombre
    }
    set apellido(nuevoApellido){
        this._apellido = nuevoApellido
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido
    }
    static saludar(){
        console.log('Saludos desde método static')
    }
    static saludar2(persona){
        console.log(persona.nombre)
    }
    toString(){
        return this.nombreCompleto()
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, titulo){
        super(nombre, apellido)
        this._titulo = titulo
    }
    get titulo(){
        return this._titulo
    }
    set titulo(nuevoTitulo){
        this._titulo = nuevoTitulo
    }

    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._titulo
    }
}

let persona = new Persona('Juan', 'Perez')

let empleado = new Empleado('Juan', 'Perez', 'Programador')

console.log(persona.toString())

console.log(empleado.toString())