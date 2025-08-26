// crear clase padre
class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    vender(cantidad){
        if(cantidad <= this.stock){
            this.stock -= cantidad;
            console.log (`Se vendieron ${cantidad} ${this.nombre}. Stock restantes: ${this.stock}`)
        }else{
            console.log(`No hay suficiente stock de ${this.nombre}`)
        }
    }
}

// crear clase hija
class Serie extends Producto{
    constructor(nombre, precio, stock, temporadas){
        super(nombre, precio, stock)
        this.temporadas = temporadas;
    }
    verEpisodio(numTemporada, numEpisodio){
        const temporadaIndex = numTemporada -1;
        const episodioIndex = numEpisodio -1;

        if(this.temporadas[temporadaIndex])

    }
}