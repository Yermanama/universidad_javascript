class Cliente extends Persona {
    static contadorClientes = 0;

    constructor (fechaRegistro){
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