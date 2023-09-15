
/* Esto es un código válido pero no es una buena práctica, lo que hay que hacer en estos casos es inicializar primero la variable con let, var o const
nombre = "Juan";
console.log(nombre)
*/

// Esto es una buena práctica
let nombre;
nombre = "Juan";
console.log(nombre);

// Vamos a usar const ahora, para variable que no queremos que se cambien nunca
const apellido = "Perez";
console.log(apellido)