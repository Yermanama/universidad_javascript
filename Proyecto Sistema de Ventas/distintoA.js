let a = 3, b = 2, c = "3"

let z = a != c // Se revisa el valor sin importar el tipo
console.log(z) // Como son iguales, es falso

z = a !== c // Se revisa el valor teniendo en cuenta el tipo
console.log(z) // Como son diferentes tipos, en este caso sería verdadero
