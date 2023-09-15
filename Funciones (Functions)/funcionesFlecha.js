// Estas funciones son muy similares a las de tipo expresión, vamos a recordarla

let sumar = function(a,b){return a + b};

let resultado = sumar(1,2)
console.log(resultado)

//Ahora vamos a hacer la misma pero con funciones de tipo flecha
// Vemos que la sintaxis es mucho más sencilla

const sumarFuncionTipoFlecha = (a,b) => a+b;
resultado = sumarFuncionTipoFlecha(1,2)
console.log(resultado)