import Computadora from './Computadora.mjs'

class Orden{
    static contadorOrdenes = 0;

    constructor(ordenadores){
        this._idOrden = ++Orden.contadorOrdenes
        this._ordenadores = ordenadores
    }
}