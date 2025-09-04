// Calculadora de Edad
// Objetivo: Solicitar el año de nacimiento del usuario y calcular su edad actual.

// Instrucciones:

// Solicita el año de nacimiento.
// Calcula la edad usando el año actual.
// Muestra la edad con un mensaje personalizado.



function obtieneEdad() {
  const input1 = prompt("Ingresa tu año de nacimiento:");
  const anoNacimiento = parseInt(input1);

  if (isNaN(anoNacimiento) ) {
    console.log("Por favor, ingresa un año válido.");
    return;
  }

  const anoActual = 2025;
  const edad = anoActual - anoNacimiento;

  console.log("Tu edad es " + edad + " años.");
}

obtieneEdad();
