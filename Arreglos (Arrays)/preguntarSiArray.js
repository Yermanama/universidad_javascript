let autos = ['BMW', 'Mercedes', 'Seat']

console.log(typeof autos) // Esto nos da como resultado que es tipo object, lo que no nos es muy útil la verdad

// Para solucionar ese problema podemos usar la siguiente sintaxis

console.log(Array.isArray(autos)) // Esto nos dará el valor true

// Otra solución es preguntar si el objeto que tenemos pertenece a la instancia de la clase array

console.log( autos instanceof Array) // En este caso nos devuelve que es true

