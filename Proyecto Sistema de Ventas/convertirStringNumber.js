

let miNumero = "10"

console.log(miNumero) // Nos devuelve 10  
console.log(typeof miNumero) // Pero es de tipo string

let edad = Number(miNumero)
console.log(edad) // Me devuelve 10
console.log(typeof edad) // Pero ahora es tipo number

if (edad >= 18){
    console.log("Puede votar ya")
} else {
    console.log("No puede votar.")
}

// Usando el operador ternario

let puedeVotar = edad >= 18 ? "Puede votar ya" : "Todavía no puede votar"
console.log(puedeVotar)