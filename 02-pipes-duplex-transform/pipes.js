const fs = require('fs');


const streamLectura = fs.createReadStream('./archivo/base.txt');
const streamEscritura = fs.createWriteStream('./archivo/destino.txt');

//usar pipe para pasar informacion de una lectura de un archivo a una escritura en otro 
streamLectura.pipe(streamEscritura);

streamLectura.on("end", () => {
    console.log('proceso finalizado');
});