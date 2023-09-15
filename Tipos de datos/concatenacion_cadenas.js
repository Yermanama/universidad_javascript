var nombre = "German";
var apellido = "Martínez";

var nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)


// Lo podemos hacer directamente si queremos

var nombreCompleto2 = 'Germán' + ' ' + 'Martínez';
console.log(nombreCompleto2);


// Las sentencias se examinan de izquierda a derecha, y en este caso se toma al número como cadena porque 
// primero está la cadena y se entiende que se va a hacer una concatenación
var x = nombre + 219;
console.log(x);

// vamos a forzar que los números se sumen de verdad
var x = nombre + (2+4);
console.log(x)

// Vamos a sumar los números de izquierda a derecha, y al encontrarse con una cadena, lo concatena al final
// SI primero se encuntran los números se suman, no se concatenan


var x = 2 + 4 + nombre
console.log(x)