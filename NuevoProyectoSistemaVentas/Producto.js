class Producto {

    static contadorProdcutos = 0;

    constructor(nombre, precio){
        this._nombre = nombre
        this._precio = precio
        this._idProducto = ++Producto.contadorProdcutos
    }


    get idProducto(){
        return this._idProducto
    }

    get precio(){
        return this._precio
    }

    set precio(nuevoPrecio){
        this._precio = nuevoPrecio
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    toString(){
        return `${this._idProducto} ${this._nombre} ${this.precio}`
    }
}