
// Estas son funcinoes que se llaman así mismas, lo que pasa es que no se pueden volver a llamar
// No podemos llamarla otra vez porque no tenemos su nombre ni la variable

(function(a,b) {
    console.log('Ejecutando la función que se llama así misma.' + (a+b))
}(3,4));

