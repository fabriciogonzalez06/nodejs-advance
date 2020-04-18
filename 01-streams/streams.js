const fs = require('fs');



console.time('Tiempo de respuesta');
/*
for (let i = 0; i <= 10; i++) {

    fs.readFileSync('archivo.txt', 'utf8');

}*/

//los streams usan varios hilos de manera asyncronica y no se bloquea el tiempo de ejecucion de las aplicaciones

for (let i = 0; i <= 100; i++) {

    const streamEscritura = fs.createReadStream('archivo.txt', {
        encoding: "utf-8"
    })

}


console.timeEnd('Tiempo de respuesta');