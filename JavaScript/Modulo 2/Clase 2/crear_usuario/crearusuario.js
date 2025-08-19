function crearUsuario(nombre, apellido, correo, ocupacion, edad) {

    //validación de los campos
    if (typeof nombre !== "string" || nombre.trim() === "") {
        return "nombre no válido";
    }
    if (typeof apellido !== "string" || apellido.trim() === "") {
        return "apellido no válido";
    }
    if (typeof correo !== "string" || !correo.includes("@")) {
        return "correo no válido";
    }
    if (typeof ocupacion !== "string" || ocupacion.trim() === "") {
        return "ocupación no válida";
    }
    if (typeof edad !== "number" || edad <= 0) {
        return "edad no válida";
    }

    //creación del objeto usuario
    const usuario = {
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        correo: correo.trim(),
        ocupacion: ocupacion.trim(),
        edad
    }
    return usuario;
}

const usuario1 = crearUsuario("Juan", "Pérez", "jp@mail.com", "Ingeniero", 30);
console.log(usuario1);