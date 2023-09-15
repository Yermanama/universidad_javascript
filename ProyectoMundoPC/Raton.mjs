import DispositivoEntrada from "./DispositivoEntrada.mjs";

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones
    }

    toString(){
        return `Ratón ${this._idRaton} ${this._tipoEntrada} ${this._marca}`
    }
}

let raton1 = new Raton('Usb', 'Razer')
console.log(raton1)

export default Raton;