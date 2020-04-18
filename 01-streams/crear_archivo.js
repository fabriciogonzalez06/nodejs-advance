const fs = require('fs');

const archivo = fs.createWriteStream('archivos/archivo.txt');

/*
for (let i = 0; i <= 1e6; i++) {
    archivo.write('lorem ipsum, vvlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum');
}*/

for (let i = 0; i <= 200; i++) {
    archivo.write('lorem ipsum, vvlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum');
}

archivo.end();