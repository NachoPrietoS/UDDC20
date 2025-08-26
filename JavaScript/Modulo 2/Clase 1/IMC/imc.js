// Solicitar datos al usuario
let peso = prompt("Ingrese su peso en kilogramos (kg):");
let altura = prompt("Ingrese su altura en metros (m):");

// Calcular el IMC
let imc = peso / (altura * altura);

// Redondear el IMC a dos decimales
imc = imc.toFixed(2);

// Clasificar el IMC según la OMS
let clasificacion = "";

if (imc < 18.5) {
  clasificacion = "Por debajo del peso normal";
} else if (imc >= 18.5 && imc < 24.9) {
  clasificacion = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
  clasificacion = "Sobrepeso";
} else if (imc >= 30 && imc < 34.9) {
  clasificacion = "Obesidad grado 1";
} else if (imc >= 35 && imc < 39.9) {
  clasificacion = "Obesidad grado 2";
} else {
  clasificacion = "Obesidad grado 3";
}

// Mostrar el resultado
alert(`Su IMC es ${imc} y se encuentra en el rango: ${clasificacion}`);
