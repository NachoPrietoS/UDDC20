// solicita al usuario ingresar 2 numeros
var num1 = prompt ("Ingresa el primer numero");
var num2 = prompt ("Ingresa el segundo numero");
// se realiza la resta y se guarda como variable
var resultado = num1 - num2;
// se valida resultado y dependiendo del resultado muestra resultado
if (resultado > 0) {
  console.log("Resultado es mayor a 0");
  let revision = resultado % 2;
  if (revision == 0) {
    console.log("Es Par");
  } else {
    console.log("Es Impar");
  }
} else {
  console.log("Resultado es menor o igual 0");
}
