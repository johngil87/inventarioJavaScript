const inquirer = require("inquirer");
let Televisor = require("./televisor");
let Nevera = require("./nevera");
let inv = 

tv1 = new Televisor(40, false, "consumo", "nacional");
tv2 = new Televisor(40, false, "consumo", "nacional" );
tv3 = new Televisor(40, false, "consumo", "importado" );
console.log( JSON.stringify(tv2) == JSON.stringify(tv3) );

const obtenerConsumo = async (msg) => {
    const { consumo } = await inquirer.prompt({
      type: "input",
      name: "consumo",
      message: msg,
    });
    return consumo;
  };
  
  const main = async () => {
    const resultado = await obtenerConsumo("Cual es el consumo del electrodomestico");
    console.log(resultado);
  };
  
  main();