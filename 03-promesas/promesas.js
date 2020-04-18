const promesasNode = require('fs').promises;


promesasNode.copyFile('archivos/base.txt', 'archivos/copia.txt')
    .then(() => console.log('se realizo correctamente'))
    .catch(() => console.log('ocurrio error'))
    .finally(() => console.log('....'));