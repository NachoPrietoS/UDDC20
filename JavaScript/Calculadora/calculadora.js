function calculadora() {
  
    // pedimos al usuario que ingrese la operacion deseada
    const operacion = prompt("Ingrese la operacion deseada (suma, resta, multiplicacion, division):").toLowerCase();

  // Solicitamos los numeros
  const input1 = prompt("ingrese el primer numero");
  const input2 = prompt("ingrese el segundo numero");

  // convertir todo a numero
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  // verificamos si los numeros son validos NaN= not a number
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, ingrese numeros validos");
    return;
  }

  let resultado;

  // usamos Switch
  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break; // sirve para salir del case
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        console.log("Error, no se puede dividir por cero");
        return;
      }
      resultado = num1 / num2;
      break;
      default: // default es como el else, ya que si no se cumple un case, ejecuta la linea a continuacion
      console.log("operacion no valida. Usar: Suma, Resta, Multi o Division");
  }
  console.log(`el resultado de la ${operacion} es ${resultado}`);
}

calculadora();
