let Electrodomestico = require("./electrodomestico") ;

module.exports = class Nevera extends Electrodomestico {

    constructor(consumo, procedencia, volumen) {
        super(consumo, procedencia);
        this.volumen = volumen;
    }

    calcularPrecio(){
        super. anadirPrecioPorCaracteristicas();
        this.sobrecostoVolumen();
    }

   sobrecostoVolumen(){
        let sobreVolumen = this.volumen - 120 ;
        if (sobreVolumen > 0){
            let incrementos = sobreVolumen/10;
            let adicional = incrementos*0.05;
            super.sumarPrecio(this.precio*adicional);
        }
    }

}