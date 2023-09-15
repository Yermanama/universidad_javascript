

// Con call podemos llamar un método definido en un objeto desde otro método

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + telefono
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Martínez',
}

// Uso de call para usar el metodo de persona1.nombreCompleto, pero con los datos de persona2
console.log(persona1.nombreCompleto())

console.log(persona1.nombreCompleto.call(persona2))

// Pasamos argumentos a call para completar el método

console.log(persona1.nombreCompleto('licenciado', 89898))

console.log(persona1.nombreCompleto.call(persona2, 'Graduado', 238904))