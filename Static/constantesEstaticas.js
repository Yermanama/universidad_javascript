class Persona {
    static contadorObjetosPersona = 0;

    email = 'Valor default email';

    static get MAX_OBJ() {
        return 5;
    }

    constructor(nombre, apellido) {
        Persona.contadorObjetosPersona++;
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorObjetosPersona < Persona.MAX_OBJ) {
            this.IDPersona = Persona.contadorObjetosPersona;
        } else {
            console.log('Se han superado el máximo número de objetos permitidos.');
        }
    }

    get apellido() {
        return this._apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set apellido(nuevoApellido) {
        this._apellido = nuevoApellido;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }

    static saludar() {
        console.log('Saludos desde método static');
    }

    static saludar2(persona) {
        console.log(persona.nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, titulo) {
        super(nombre, apellido);
        this._titulo = titulo;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._titulo;
    }
}

console.log(Persona.MAX_OBJ);
