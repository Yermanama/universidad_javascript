function miFuncion(a,b){
    console.log(arguments) // Esto es para ver cuáles son los argumentos que le pasamos a la función
    console.log(arguments.length) // Debemos de estar dentro de la función para poder llamar estas propiedades
    return a + b
}

console.log(typeof miFuncion)
console.log(miFuncion(2,3))

let miFuncionTexto = miFuncion.toString()
console.log(miFuncionTexto)
