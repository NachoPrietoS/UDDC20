function manejoTienda(productosIniciales) {
  const inventario = [...productosIniciales];

  return {
    // Agrega un producto al inventario
    agregarProducto(producto) {
      const existe = inventario.find(p => p.nombre === producto.nombre);
      if (existe) {
        return "El producto ya existe en el inventario";
      }
      if (!producto.nombre || producto.precio <= 0 || producto.cantidad < 0) {
        return "Datos del producto no válido";
      }
      inventario.push(producto);
      return "Producto agregado correctamente";
    },

    // Elimina un producto del inventario
    eliminarProducto(nombreProducto) {
      const index = inventario.findIndex(p => p.nombre === nombreProducto);
      if (index == -1) {
        return "Producto no encontrado"
      }
      inventario.splice(index, 1);
      return "Producto eliminado correctamente"
    },

    // calcular el valor total del inventario
    valorTotal() {
      return inventario.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
      }, 0);
    },

    mostrarInventario() {
      return inventario;
    }
  };
}

const productos = [
  {nombre: "notebook", precio: 1500, cantidad: 3},
  {nombre: "mouse", precio: 25, cantidad: 10}
];

const tienda = manejoTienda(productos);
console.log(tienda.mostrarInventario());
console.log(tienda.agregarProducto({nombre:"teclado", precio: 50, cantidad: 5}));
console.log(tienda.eliminarProducto("mesa"));
// console.log(tienda.eliminarProducto("mouse"));
// console.log(tienda.mostrarInventario());
console.log("valor total del inventario: $" + tienda.valorTotal());