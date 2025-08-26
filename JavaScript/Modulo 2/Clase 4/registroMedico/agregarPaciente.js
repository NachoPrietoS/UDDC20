const agregarPaciente = (pacientes, nuevoPaciente) => {
    if(!Array.isArray(pacientes)){
        return "Error: la lista debe ser un arreglo";
    }
    
}


// const agregarPaciente = (pacientes, nombrePaciente) => {
//     if(!Array.isArray(pacientes)){
//         return "Error: la lista debe ser un arreglo";
//     }

//     const buscaPaciente = pacientes.some(user => user.nombre === nombrePaciente);
//     if(!buscaPaciente){
//         return `Error: el paciente "${nombrePaciente}" no existe`;
//     }

//     return pacientes.map(user => user.nombre === nombrePaciente ?
//         {...user}
//         :user
//     );
// };

// const recuperacion = [
//     {nombre: "Maria"},
//     {nombre: "Pedro"},
//     {nombre: "Juan"},
//     {nombre: "Ana"}
// ];
// console.log(recuperacion);
