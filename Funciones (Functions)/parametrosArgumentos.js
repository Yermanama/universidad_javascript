// Argumentos -> SOn las variables que recibe la función CUANDO LA USAMOS   
// Parámetros -> Son las variables que va a recibir la función dentro de las paréntensis CUANDO LA DEFINIMOS


let sumar = function (a = 4,b = 5){ // Estos son los parámetros por defecto
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
}

resultado = sumar(1,2)
console.log(resultado)

resultado = sumar()
console.log(resultado)