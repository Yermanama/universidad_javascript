let a = 3, b = 2, c = 1, d = 4;


// Lo primero que debemos de saber es que las operaciones se realizan de izquierda a derecha
let z = a * b + c;
console.log(z)

// La multiplicacion tiene prioridad sobre la suma
z = c + a * b;
console.log(z)

// Con divisiones también
z = c * b + c / d;
console.log(z)

