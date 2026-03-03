const express = require('express');
const app = express();
const PORT = 3000;


const produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 250.00 },
    { id: 2, nome: "Mouse Gamer", preco: 150.00 },
    { id: 3, nome: "Monitor 144hz", preco: 1200.00 }
];


app.get('/produtos', (req, res) => {
    res.json(produtos);
});


app.listen(PORT, () => {
    console.log(` Servidor rodando em http://localhost:${PORT}`);
    console.log(` Acesse http://localhost:${PORT}/produtos para ver os dados`);
});