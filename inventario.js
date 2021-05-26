module.exports = class InventarioElectrodomesticos{

    constructor(cantidad,electrodomestico){
        this.cantidad = cantidad;
        this.electrodomestico = electrodomestico;
    }

    get cantidad(){
        return this.cantidad;
    }

    get electrodomestico(){
        return this.electrodomestico;
    }

    set cantidad(cantidad){
        this.cantidad = cantidad;
    }





}
