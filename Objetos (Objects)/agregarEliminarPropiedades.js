let persona = {
    nombre: 'German', 
    apellido: 'Martinez', 
    email: 'gmartinez@mail.com',
    edad: 25,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.persona
    }
}

// Añadir
persona.telefono = 123456789

console.log(persona)

// Eliminar

delete persona.telefono

console.log(persona)