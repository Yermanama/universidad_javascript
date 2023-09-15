

let x = 10; // valor primitivo, no podemos asiganar ni atributos ni métodos

function cambiarValor(a){
    a = 20
    return a 
}

// vamos a intentar cambiar el valor primitivo
console.log(cambiarValor(x))
console.log(x)
// No podemos cambiar el valor de la variable, sólo se pasa una copia del valor
