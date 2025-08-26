const calculaArea = (longitud, ancho) => {
    if(typeof longitud !== "number" || typeof ancho !== "number"){
        return "Error: los parametros deben ser numeros"
    }

    if(longitud <= 0 || ancho <= 0){
        return "Error: Los valores deben ser positivos"
    }

    const area = longitud * ancho;
    return parseFloat(area.toFixed(2));
}

console.log(calculaArea(5, 10));
console.log(calculaArea(3.54555, 2.10));
console.log(calculaArea(-5, -10));
console.log(calculaArea("5", 10));