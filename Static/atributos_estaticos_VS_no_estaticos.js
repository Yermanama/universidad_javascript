class Persona{

    // Atributos estáticos de la clase -> Los de definimos con static
    static contadorObjetosPersona = 0;

    // Atributo de nuestros objetos
    email = 'Valor default email'

    constructor(nombre, apellido){
        Persona.contadorObjetosPersona++
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
        return this._nombre + ' ' + this._apellido
    }
    static saludar(){
        console.log('Saludos desde método static')
    }
    static saludar2(persona){
        console.log(persona.nombre)
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

const persona = new Persona('Juan', 'Perez')
const empleado1 = new Empleado('Juan', 'perez' ,'Programador')

console.log(empleado1)