let a = 3, b = 2
let z = a + b

// Incremento
// Pre-incremento (el operador ++ antes de la variable)
z = ++a; // El número aumenta antes de asignarse 
console.log(a)
console.log(z)

// Post - incremento (el operador ++ después de la variable)
// Primero se asigna la variable y después se hace el incremento
z = b++;
console.log(b)
console.log(z)

//También tenemos el pre - decremento y el post - decremento 
// Funcionan igual pero restando el valor

z = --a
console.log(z)
console.log(a)

z = b--
console.log(b)
console.log(z)
