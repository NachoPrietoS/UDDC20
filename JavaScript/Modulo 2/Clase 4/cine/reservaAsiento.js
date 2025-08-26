const reservarAsiento = (asientosDisponibles, asiento) => {
    if(!Array.isArray(asientosDisponibles)){
        return "Error: Los asientos disponibles deben ser un arreglo";
    }

    if(!asientosDisponibles.includes(asiento)){
        return `Error: El asiento ${asiento} no esta disponible`;
    }

    return asientosDisponibles.filter(a => a !== asiento);
};

const asientos = [1, 2, 3, 4, 5];
console.log(asientos);

// reserva
const nuevoAsiento = reservarAsiento(asientos, 3);
console.log(nuevoAsiento);

// reserva no existe
console.log(reservarAsiento(asientos, 10))