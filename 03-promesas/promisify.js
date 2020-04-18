const fs = require('fs');
const util = require('util');

/*
fs.writeFile("archivos/archivoprueba.txt", "123455", () => {
    console.log('ok');
});
*/


const writeFilePromesa = util.promisify(fs.writeFile);

writeFilePromesa("archivos/probandoPromise.txt", "123455")
    .then(() => {
        console.log('todo bien');
    })
    .catch(() => {
        console.log('hay error');
    });