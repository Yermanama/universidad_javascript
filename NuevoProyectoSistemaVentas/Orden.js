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

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5
    }

    constructor(){
        this._productos = []
        this._idOrden = ++Orden.contadorOrdenes
    }

    get idOrden(){
        return this._idOrden
    }

    agregarProductos(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto)
        }
        else{
            console.log('No se pueden agregar más productos')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' '
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
    }
}


let producto1 = new Producto('Melon', 200)
let producto2 = new Producto('Sandia', 300)

console.log(producto1.precio)
console.log(producto2.nombre)

let orden1 = new Orden()

orden1.agregarProductos(producto1)
orden1.agregarProductos(producto1)
orden1.agregarProductos(producto2)
orden1.agregarProductos(producto2)

console.log(orden1.calcularTotal())

orden1.mostrarOrden()

console.log(orden1.idOrden)
