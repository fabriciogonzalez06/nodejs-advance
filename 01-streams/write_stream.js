const fs = require('fs');



var contenido = "12234455444"
var iteraciones = 15;

for (let i = 0; i <= iteraciones; i++) {

    contenido = contenido + contenido;

}


fs.writeFile('write/normal.txt', contenido, (err) => {
    if (err) {
        console.log('ocurrio un error fs.writeFile');
    } else {
        console.log('Se guardo correctamente fs.writeFile');
    }
})


const streamEscritura = fs.createWriteStream("write/stream.txt");

streamEscritura.write(contenido, (err) => {
    if (err) {
        console.log('ocurrio error stream');
    } else {
        console.log('Se guardo correctamente stream');
    }
});