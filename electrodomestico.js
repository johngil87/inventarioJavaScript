module.exports = class Electrodomestico {

    constructor(consumo, procedencia) {
        this.precio = 0;
        this.consumo = consumo;
        this.procedencia = procedencia;
    }


    anadirPrecioProcedencia(){
       this.precio += this.procedencia === "nacional" ? 250000 : 350000
    }

    sumarPrecio(aumento){
        this.precio += aumento;
    }

    anadirPrecioConsumo() {
        switch (this.consumo) {
            case "A":
                this.precio = 450000;
                break;
            case "B":
                this.precio = 350000;
                break;
            case "C":
                this.precio = 250000;
                break;

        }
    }

    anadirPrecioPorCaracteristicas(){
        this.anadirPrecioConsumo();
        this.anadirPrecioProcedencia();
    }
}


