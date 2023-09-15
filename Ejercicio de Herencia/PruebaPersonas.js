class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
    }

    get idPersona(){
        return this._idPersona
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

    get edad(){
        return this._edad
    }

    set edad(nuevaEdad){
        this._edad = nuevaEdad
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`
    }
}

class Empleado extends Persona{


    static contadorEmpleados = 0;

    constructor(sueldo, nombre, apellido, edad){
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleados
        this._sueldo = sueldo
    }

    get idEmpleado(){
        return this._idEmpleado
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(nuevoSueldo){
        this._sueldo = nuevoSueldo
    }

    toString(){
        return ` ${super.toString()} ${this._idEmpleado} ${this._sueldo}`
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;

    constructor (fechaRegistro, nombre, apellido, edad){
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorClientes
        this._fechaRegistro = fechaRegistro
    }

    get idCliente(){
        return this._idCliente
    }

    get fechaResgistro(){
        return this._fechaResgistro
    }

    set fechaRegistro(nuevaFechaRegistro){
        this._fechaResgistro = nuevaFechaRegistro
    }

    toString(){
        return `${super.toString()} + ${this._idCliente} + ${this._fechaRegistro}`
    }
}

// Prueba clase Personas

let persona1 = new Persona('Juan', 'Perez', 24)
console.log(persona1)

//Prueba clase Cliente

let cliente1 = new Cliente(new Date(), 'cliente', 'primero', 28)
console.log(cliente1)

// Prueba clase Empleado

let empleado1 = new Empleado(24000, 'empleado', 'segundo', 82)
console.log(empleado1)