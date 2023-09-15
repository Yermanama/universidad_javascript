// En javascript todas las funciones tienen la propiedad de hoisting, y esto es que se pueden 
// llamar en cualquier parte del código
// Menos las funciones tipo flecha

let resultado = sumarTodo(1, 2, 3, 4, 5)
console.log(resultado)

function sumarTodo(){
    let suma = 0
    for(let contador = 0; contador < arguments.length; contador++){
        suma += arguments[contador]
    }
    return suma
}


