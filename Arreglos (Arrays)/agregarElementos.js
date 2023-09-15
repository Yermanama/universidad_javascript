let autos = ['BMW', 'Mercedes', 'Volvo']

console.log(autos)

console.log(autos.length)

autos.push('Seat')

console.log(autos)
console.log(autos.length)

// Como lenght siempre nos va a dar un valor por encima del índice del último elemento del array, lo que vamos a hacer es asignarle el valor del
// índice en donde queremos insertar el valor del length
autos[autos.length] = 'Bugatti'

console.log(autos)
console.log(autos.length)

// Otra opción es que podemos asignar un valor a un índice que está separado por algún índice vacío del resto de los valores,
// Esto produce que se creen valores vacíos en los índices que hay entre medias

autos[6] = 'Porsche'
console.log(autos)
console.log(autos.length)

// Lo vamos a hacer exagerándolo un poco
autos[60] = 'Porsche'
console.log(autos)
console.log(autos.length)