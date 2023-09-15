// No es recomendable el uso de etiquetas
// Estas nos dejan saltar a una parte de nuestro código

inicio:
    for (let contador = 0; contador < 10; contador++){
        if (contador % 2 !== 0){
            continue inicio 
        } else{
            console.log(contador)
        }
    }