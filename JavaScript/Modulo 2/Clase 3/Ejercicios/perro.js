// CLASES Y HERENCIAS
// Creacion de clase padre
class Animal{
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse(){
        console.log(`Soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

// creacion de clases hijo que hereda todo de animal
class Perro extends Animal{
    constructor(nombre, edad, raza){
        super(nombre, edad); // llama al constructor de animal
        this.raza = raza;
    }
    ladrar(){
        console.log("!Woof Woof!")
    }
}

// ejemplos de uso
const miPerro = new Perro ("Brunito", 3, "Pincher");
miPerro.presentarse(); //hereado de animal
console.log(`Raza: ${miPerro.raza}`);
miPerro.ladrar();
