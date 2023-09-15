
for (let contador = 0; contador <= 10; contador++){
    if (contador % 2 !== 0){
        continue; // Salta a la siguiente iteración del ciclo for
    } else {
        console.log(contador);
    }
}