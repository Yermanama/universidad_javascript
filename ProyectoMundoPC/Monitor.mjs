class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca
    }

    set marca(nuevaMarca){
        this._marca = nuevaMarca
    }

    get tamaño(){
        return this._tamaño
    }

    set tamaño(nuevoTamaño){
        this._tamaño = nuevoTamaño
    }

    toString(){
        return `Monitor ${this._idMonitor} ${this._marca} ${this._tamaño}`
    }
}


let monitor1 = new Monitor('HP', 32)
console.log(monitor1)

export default Monitor;