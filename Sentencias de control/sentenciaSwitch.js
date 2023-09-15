let numero = 3

let numeroTexto = "Valor desconocido"

switch( numero ){ // Debemos de saber que  las comparaciones son estrictas, es decir, que los tipos se comprueba para que sean los mismos
    case 1:
        numeroTexto = "Numero uno"
        break
    case 2:
        numeroTexto = "Numero dos"
        break
    case 3: 
        numeroTexto = "Numero tres"
        break
    case 4:
        numeroTexto = "Numero cuatro"
        break
    default:
        numeroTexto = "Caso no encontrado"
        break
}

console.log(numeroTexto) 