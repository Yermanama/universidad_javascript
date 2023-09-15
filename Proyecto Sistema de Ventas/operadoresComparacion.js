let a = 3, b = 2, c = "3"

// El primero de los comporadores es ==, que nos indica si a es igual a b, sin tener en cuenta los tipos
let z = a == b
console.log(z)

// El siguiente de los comparadores es ===, que revisa el valor pero también los tipos

z = a == c
console.log(z) // Como son iguales, aunque de distinto tipo
z = a === c
console.log(z) // Son de distinto tipo 