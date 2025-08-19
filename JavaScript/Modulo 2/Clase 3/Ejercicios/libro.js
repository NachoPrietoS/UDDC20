// crear clase padre
class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock
    }
    // metodo
    arrendar(cantidad){
        if(cantidad <= this.stock){
            this.stock -= cantidad;
            console.log (`Se arrendo ${cantidad} libro: ${this.nombre}. Stock restantes: ${this.stock}`)
        }else{
            console.log(`Libro ${this.nombre} ya se encuentra arrendado`)
        }
    }
}

// crear clase hijo
class Libro extends Producto{
    constructor(nombre, precio, stock, autor){
        super(nombre, precio, stock);
        this.autor = autor;
    }
    resumen(){
        console.log(`Resumen: ${this.nombre}, Autor: ${this.autor}, Valor: $${this.precio}`)
    }
}

// ejemplos de uso
const libro1 = new Libro ("Cien años de soledad", 10000, 2, "Gabriel García Márquez");
libro1.resumen();
libro1.arrendar(1);