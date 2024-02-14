const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/executar-comando', (req, res) => {
    const caminhoDaPasta = 'C:/Users/Guilherme Mello/Documents/projeto-qa-guilherme-mello/Cypress'; 
    const comando = 'npx cypress open'; 
    // const comando = 'npx cypress run --record --key c1d53d8d-c5d4-441d-9685-099a1921b515'; 

   
    debugger
    exec(comando, { cwd: caminhoDaPasta }, (error, stdout, stderr) => {
        console.log(`Comando executado com sucesso: ${stdout}`);
        res.status(200).send('Comando executado com sucesso');
    });
});


const port = process.env.PORT || 3000;
app.listen(port, '192.168.0.102', () => {
    console.log(`Servidor iniciado  localhost:${port}`);
});
