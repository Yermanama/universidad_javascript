let persona = {
    nombre: 'German', 
    apellido: 'Martinez', 
    email: 'gmartinez@mail.com',
    edad: 25,
     get nombreCompleto(){ // DE esta manera indicamos que la función que estamos indicando es un método para obtener información del objeto
        return this.nombre + ' ' + this.apellido
    }
}

// Para obtener los valores de nuestras propiedades

console.log(persona.nombreCompleto)