const http = require('https');



const req = http.get('https://en.wikipedia.org/w/api.php?action=help&format=json', (res) => {

    res.on('data', (data) => {
        console.log('Recibiendo datos')

    });

    res.on('end', (data) => {
        console.log('termino http');
    })
});


req.on('socket', () => {
    console.log('.........');
});

req.on('close', () => {
    console.log('termino ');
});