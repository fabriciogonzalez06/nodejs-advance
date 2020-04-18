const fs = require('fs');
const EventEmitter = require('events');

class Emisor extends EventEmitter {}

const miEmisor = new Emisor();

const streamEscritura = fs.createWriteStream('event-emiter.txt');

const escribirArchivo = () => {
    var iteraciones = 5;
    for (let i = 0; i < iteraciones; i++) {
        streamEscritura.write(`iteracion #${i}\n`);

    }

    streamEscritura.write('===================fin================');
    streamEscritura.close();
}

const notificarPorCorreo = () => {
    console.log('preparando correo');
    setTimeout(() => {

        miEmisor.emit("correoOK");
    }, 1000);

}



const leerDocumento = () => {
    fs.readFile('event-emiter.txt', (err, data) => {
        console.log('data ', data.toString());
    });
}


streamEscritura.on('close', () => {
    notificarPorCorreo();
});

miEmisor.on("correoOK", () => {
    leerDocumento();
})

escribirArchivo();