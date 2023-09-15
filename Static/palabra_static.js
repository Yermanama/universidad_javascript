class Persona{

    // Atributos estáticos de la clase
    static contadorObjetosPersona = 0;

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
    constructor(titulo){
        super(this.nombre, this.apellido)
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

persona1 = new Persona('Germán', 'Martínez')

// persona1.saludar()
// No se puede porque los métodos estáticos solo se pueden llamar desde la clase y no desde un objeto

Persona.saludar()
Persona.saludar2(persona1)

console.log(Persona.contadorObjetosPersona)
console.log(Empleado.contadorObjetosPersona)