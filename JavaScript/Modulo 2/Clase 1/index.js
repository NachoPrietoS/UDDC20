// Variable VAR (alcance global o function scope)
var nombre = "yo soy pepito";
console.log(nombre);

// Variable LET (alcance de bloque o block scope)
let edad = 40;
edad = 30;
console.log(edad); // Salida: 30

// Variable CONST (alcance de bloque o block scope, no se puede reasignar)
const PI = 3.14159;
// PI = 3.14; // Error: Asignación a una variable constante
console.log(PI); // Salida: 3.14159

// Alcance de bloque o block scope
let mostrarMensaje = true;

if (mostrarMensaje) {
  let variableBloque = "Soy una variable de bloque";
  console.log(variableBloque); // Salida: "Soy una variable de bloque"
}

console.log(variableBloque); // Error: variableBloque is not defined


let frutas = ["manzana", "plátano", "naranja"];

frutas.forEach(fruta => {
    console.log("Fruta: " + fruta);
});
