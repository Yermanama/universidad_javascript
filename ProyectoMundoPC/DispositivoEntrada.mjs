
class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }

    set tipoEntrada(nuevoTipoEntrada){
        this._tipoEntrada = nuevoTipoEntrada
    }

    get marca(){
        return this._marca
    }

    set marca(nuevaMarca){
        this._marca = nuevaMarca
    }

    toString(){
        return `Dispositivo de entrada: ${this._tipoEntrada} ${this._marca}`
    }
}


export default DispositivoEntrada;