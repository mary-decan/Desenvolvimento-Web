const express = require('express');

const app = express();

app.get("/",(req, res) => {
    res.send("Página inicial");
});

app.get("/contato",(req, res) => {
    res.send("Contato");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});