let numeroMes = 13

if(numeroMes >= 3 && numeroMes < 6){
    console.log("Estamos en primavera")
} else if( numeroMes >= 6 && numeroMes < 9){
    console.log("Estamos en verano")
} else if ( numeroMes >= 9 && numeroMes < 12){
    console.log("Estamos en otoño")
} else if (numeroMes == 12 || numeroMes < 3 && numeroMes >= 1){
    console.log("Estamos en invierno")
} else if (numeroMes < 1 || numeroMes > 12){
    console.log("El mes proporcionado está fuera de los rangos reales")
}

