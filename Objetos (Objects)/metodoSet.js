let persona = {
    nombre: 'German', 
    apellido: 'Martinez', 
    email: 'gmartinez@mail.com',
    edad: 25,
    idioma: 'es',
    get language(){
        return this.idioma.toUpperCase();
    },
    set language(nuevoIdioma){
        this.idioma = nuevoIdioma.toUpperCase();
    },
    get nombreCompleto(){ // DE esta manera indicamos que la función que estamos indicando es un método para obtener información del objeto
        return this.nombre + ' ' + this.apellido
    }
}


console.log(persona.language)

persona.language = 'mex'

console.log(persona.language)
console.log(persona.idioma)