let miNumero = "18"

let edad = Number(miNumero)
console.log(edad) // Esto nos da un valor NaN

if (!isNaN(miNumero)){
    edad = Number(miNumero)
    if (edad >= 18){
        console.log("Ya puede votar")
    } else{
        console.log("Todavía no puede votar")
    }
} else {
    console.log("El valor proporcionado no es un número")
}


// Ahora lo voy a hacer con el operador ternario

if (!isNaN(miNumero)){
    edad = Number(miNumero)
    console.log((edad >= 18) ? "Es mayor de edad, puede votar": "Es pequeño, todavía no puede votar.")
} else {
    console.log("Por favor, introduce un valor que sea un número")
}

// Esta es la manera más condensanda de escribir el código

const mensaje = !isNaN(miNumero)
    ? (Number(miNumero)) >= 18 ? "Ya puede votar": "Todavía no puede votar"
    : "El valor proporcionado no es un número válido";

console.log(mensaje)

