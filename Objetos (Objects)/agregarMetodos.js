let persona = {
    nombre: 'german', 
    apellido: 'martinez',
    edad : 25, 
    email: 'gmartinez@mail.com', 
    imprimirNombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona.imprimirNombreCompleto())
