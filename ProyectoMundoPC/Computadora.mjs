import Teclado from './Teclado.mjs';
import Raton from './Raton.mjs';
import Monitor from './Monitor.mjs';


class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    get monitor(){
        return this._monitor
    }

    set monitor(nuevoMonitor){
        this._monitor = nuevoMonitor
    }

    get teclado(){
        return this._teclado
    }

    set teclado(nuevoTeclado){
        this._teclado = nuevoTeclado
    }

    get raton(){
        return this._raton
    }

    set raton(nuevoRaton){
        this._raton = nuevoRaton
    }

    toString(){
        return `Computadora ${this._idComputadora} ${this._nombre} ${this._raton} ${this._teclado} ${this._monitor}`
    }
}

let teclado1 = new Teclado('USB', 'Logitech')
let raton1 = new Raton('Wireless', 'Razer')
let monitor1 = new Monitor('HP', 32)

let computadora1 = new Computadora('Mi computadora', monitor1, teclado1, raton1)

console.log(computadora1)