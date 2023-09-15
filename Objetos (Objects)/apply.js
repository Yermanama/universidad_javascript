let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, telefono){
        return  titulo + ' ' + this.nombre + ' ' + this.apellido +' ' + telefono
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Martínez',
}


// Apply -> Nos permite llamar de un método que no existe en el objeto creado, pero si en otro
console.log(persona1.nombreCompleto('Licenciado', 123456))

// La diferencia con el método call, es que debemos de pasar los argumentos en un arreglo
arreglo = ['Graduado', 654321]
console.log(persona1.nombreCompleto.apply(persona2, arreglo))
