// Clasificador de Calificaciones
// Objetivo: Clasificar una nota numérica en una escala de rendimiento.

// Instrucciones:

// Solicita una nota entre 1 y 10.
// Clasifica según:
// 1–3: Insuficiente
// 4–5: Regular
// 6–7: Bueno
// 8–9: Muy bueno
// 10: Excelente

function calificaciones() {
  const input1 = prompt("Ingresa la nota obtenida:");
  const nota = parseFloat(input1);
  let calificacion = "";

  if (isNaN(nota) || nota < 1 || nota > 10) {
    console.log("Por favor, ingresa una nota válida entre 1 y 10.");
    return;
  }

  if (nota >= 1 && nota <= 3) {
    calificacion = "Insuficiente";
  } else if (nota <= 5) {
    calificacion = "Regular";
  } else if (nota <= 7) {
    calificacion = "Bueno";
  } else if (nota <= 9) {
    calificacion = "Muy Bueno";
  } else {
    calificacion = "Excelente";
  }

  console.log(`Tu calificación es: ${calificacion}`);
}

calificaciones();
