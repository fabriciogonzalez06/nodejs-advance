const fs = require('fs');

//node posee cuatro tipos de streams
// lectura, escritura, duplex y transform


const streamLectura = fs.createReadStream('./archivos/archivo.txt', { encoding: 'utf8' });


//eventos de los streams
streamLectura.on('open', () => {
        console.log('abriendo archivo');
    })
    .on('data', () => { //cuando recibimos data
        console.log('------');
    })
    .on('close', () => {
        console.log('archivo cerrado');
    })
    .on('error', (err) => {
        console.log('error archivo ', err.message);
    })