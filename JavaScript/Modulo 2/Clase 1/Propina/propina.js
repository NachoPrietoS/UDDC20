// Calculadora de Propina
// Objetivo: Calcular cuánto dejar de propina en un restaurante.

// Instrucciones:

// Solicita el total de la cuenta.
// Solicita el porcentaje de propina que desea dejar.
// Calcula y muestra el monto de la propina y el total a pagar.


function propina() {
  const input1 = prompt("Ingresa el total de lo consumido:");
  const input2 = prompt("Ingresa el porcentaje de propina que deseas agregar (Ej: 10):");

  const totalBoleta = parseFloat(input1);
  const porcentajePropina = parseFloat(input2);

  // Validaciones
  if (isNaN(totalBoleta) || isNaN(porcentajePropina) || totalBoleta <= 0 || porcentajePropina < 0) {
    console.log("Por favor, ingresa datos válidos.");
    return;
  }

  // Calculo de propina
  const totalPropina = totalBoleta * (porcentajePropina / 100);
  const totalConPropina = totalBoleta + totalPropina;

  console.log(`El total consumido es $${totalBoleta.toFixed(2)}, la propina añadida es $${totalPropina.toFixed(2)}.`);
  console.log(`El total final a pagar es $${totalConPropina.toFixed(2)}.`);
}

propina();
