// creacion de clase producto
class Producto{
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    // metodo vender
    vender(cantidad){
        if(cantidad <= this.stock){
            this.stock -= cantidad;
            console.log (`Se vendieron ${cantidad} ${this.nombre}. Stock restantes: ${this.stock}`)
        }else{
            console.log(`No hay suficiente stock de ${this.nombre}`)
        }
    }
}

// ejemplo de uso
// se agregan productos
const producto1 = new Producto("Note", 500, 5);
// llamado de la funcion vender
producto1.vender(1);
producto1.vender(10);
