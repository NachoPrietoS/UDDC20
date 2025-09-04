// Calculadora de Tiempo de Viaje
// Objetivo: Calcular cuánto tiempo tomará un viaje.

// Instrucciones:

// Solicita la distancia en kilómetros.
// Solicita la velocidad promedio en km/h.
// Calcula el tiempo usando: tiempo = distancia / velocidad.
// Muestra el tiempo en horas y minutos.

function tiempoDeViaje(){
    const km = prompt("Ingresa los KM del viaje");
    const vel = prompt("Ingresa la velocidad promedio");

    // validacion de datos 
    if (isNaN(km) || isNaN(vel) || km <= 0 || vel <= 0){
        console.log("ingrese datos validos");
        return;
    }

    // calculo de tiempo
    let tiempo = km / vel;

    console.log(`el tiempo es ${tiempo}`)
}

tiempoDeViaje();