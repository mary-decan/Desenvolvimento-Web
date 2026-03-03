const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

const produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 250.00 }
];


app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

   
    const novoProduto = {
        id: produtos.length + 1,
        nome: nome,
        preco: preco
    };

    produtos.push(novoProduto);

   
    res.status(201).json(novoProduto);
});

app.listen(PORT, () => {
    console.log(` Servidor rodando em http://localhost:${PORT}`);
});