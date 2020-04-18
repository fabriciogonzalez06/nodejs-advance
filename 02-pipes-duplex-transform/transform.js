const fs = require('fs');
const { Transform } = require('stream');

const streamLectura = fs.createReadStream('./archivo/base.txt');
const streamEscritura = fs.createWriteStream('./archivo/destino.txt');

streamLectura.setEncoding("utf8");

const filtro = new Transform({
    writableObjectMode: true, //para que entre en modo de objeto
    transform(data, encoding, callback) {
        this.push(data.toString().toUpperCase());
        callback();
    },
    final(callback) {
        callback();
    }
});

//usar pipe para pasar informacion de una lectura de un archivo a una escritura en otro 
streamLectura.pipe(filtro).pipe(streamEscritura);

streamLectura.on("end", () => {
    console.log('proceso finalizado');
});