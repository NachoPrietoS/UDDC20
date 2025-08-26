const actualizarUsuario = (usuarios,nombreUsuario, datosActualizados) => {
    if(!Array.isArray(usuarios)){
        return "Error: la lista de usuarios debe ser un array o arreglo";
    }

    const usuarioExiste = usuarios.some(user=> user.nombre === nombreUsuario);
    if(!usuarioExiste){
        return `Error: el usuario "${nombreUsuario}" no existe`;
    }

    return usuarios.map(user => user.nombre === nombreUsuario ?
        {...user, ...datosActualizados}
        :user
    );
};

const usuarios = [
    {nombre: "a", edad: 1, email: "a@gmail.com"},
    {nombre: "b", edad: 2, email: "b@gmail.com"}
];
console.log(usuarios);

const usuarioActualizado = actualizarUsuario(usuarios, "a",{edad: 90, email: "nuevoemail@mail.com"});
console.log(usuarioActualizado);

console.log(actualizarUsuario(usuarios, "pedro",{edad: 25}));