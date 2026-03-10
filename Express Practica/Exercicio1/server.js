const express = require('express');
const app = express();

const PORT = 3000;

app.get('/sobre', (req, res) => {
    
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SISTEMA</title>
        </head>
        <body>
            <h1>Sistema Gerenciador</h1>
            <p>Aprendizagem Express</p>
            <p><strong>Desenvolvedor:</strong> Mariangel Soutte</p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});