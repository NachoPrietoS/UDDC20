// Conversor de Temperatura
// Objetivo: Convertir grados Celsius a Fahrenheit.

// Instrucciones:

// Solicita la temperatura en Celsius.
// Usa la fórmula: F = C × 9/5 + 32.
// Muestra el resultado con dos decimales.

function conversorTemp (){
    const imput1 = prompt("Ingresa la temperatura en Grados Celsius");
    const celsius = parseInt(imput1);

    if (isNaN(celsius) ) {
    console.log("Por favor, ingresa un dato valido");
    return;
  }

  // calculo
  const gradosFare = (celsius * 1.8) + 32;
  console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`);
};


conversorTemp();