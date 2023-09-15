
// Paso por referencia

const persona = { // Esto es un objeto, que vamos a poder asignar métodos y argumentos
    nombre: 'German',
    apellido: 'Martinez'
}

console.log(typeof persona)

function cambiarValor(p1){
    p1.nombre = 'David'
}

cambiarValor(persona)
console.log(persona)

// De esta manera si que podemos acceder a los parámetros del objeto que hemos creado,
// Y cambiamos su valor, esto sería un paso por referencia, es decir, que si que accedemos 
// a la referencia en memoria del objeto en sí, no a una copia de su valor