class vehiculo{
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.estado = "Detenido";
    }
    // metodos
    arrancar(){
        this.estado = "En marcha";
        console.log(`Vehiculo ${this.marca} ${this.modelo} esta en marcha`);
    }

    detener(){
        this.estado = "Detenido";
        console.log(`Vehiculo ${this.marca} ${this.modelo} esta detenido`);
    }
}

// ejemplos de uso
const auto1 = new vehiculo("Peugeot", 2008, 2022);
auto1.arrancar();
auto1.detener();