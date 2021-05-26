const Electrodomestico = require("./electrodomestico");

module.exports = class Televisor extends Electrodomestico{

    constructor(tamano, tdt, consumo, procedencia){
        super(consumo, procedencia);
        this.tamano = tamano;
        this.tdt = tdt;

    }


    asignarPrecios(){
        super.anadirPrecioPorCaracteristicas();
        this.precioPorPulgadas();
        this.precioConTDT();
    }

    precioPorPulgadas(){        
        let porcentaje = this.tamano <= 40 ? 0 : 0.3;
        console.log(this.precio);
        super.sumarPrecio(this.precio * porcentaje);
    }

    precioConTDT(){
        if(this.tdt){
         super.sumarPrecio(250000);
        }
    }
 
       
}