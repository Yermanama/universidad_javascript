import DispositivoEntrada from "./DispositivoEntrada.mjs";

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados
    }

    toString(){
        return `Teclado: ${this._idTeclado} ${this._tipoEntrada} ${this._marca}`
    }
}

let teclado1 = new Teclado('Bluetooth', 'Logitech')
console.log(teclado1)

export default Teclado;