//para ver si los archivos no contienen error
//se inyectan en un proceso intermedio, tienen lectura y escritura
const fs = require('fs');
const { Duplex } = require('stream');

const streamLectura = fs.createReadStream('./archivo/base.txt');
const streamEscritura = fs.createWriteStream('./archivo/destino.txt');


//siempre definir los dos metodos
//se ve la informacion se intercepta y se realiza algun tipo de reporte
const reporte = new Duplex({
    write(data, encode, callback) {
        console.log('data ', data);
        callback(); //siempre se ejecuta para pasar la informacion
    },
    read(size) {}
});


//usar pipe para pasar informacion de una lectura de un archivo a una escritura en otro 
streamLectura.pipe(reporte).pipe(streamEscritura);

streamLectura.on("end", () => {
    console.log('proceso finalizado');
});