const express = require('express');
const app = express();
const PORTA = 3000;

// Middleware para processar JSON
app.use(express.json());

// 1. Banco de dados em memória
let livros = [
    { id: 1, titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 },
    { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 }
];

// 2. [GET] Listar todos os livros
app.get('/livros', (req, res) => {
    res.json(livros);
});

// 3. [GET] Buscar um livro por ID
app.get('/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id == req.params.id);
    if (livro) {
        res.json(livro);
    } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
    }
});

// 4. [POST] Adicionar novo livro
app.post('/livros', (req, res) => {
    const { titulo, autor, ano } = req.body;
    const novoLivro = {
        id: livros.length > 0 ? livros[livros.length - 1].id + 1 : 1,
        titulo,
        autor,
        ano
    };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

// 5. [PUT] Atualizar um livro
app.put('/livros/:id', (req, res) => {
    const indice = livros.findIndex(l => l.id == req.params.id);
    if (indice !== -1) {
        livros[indice] = { id: Number(req.params.id), ...req.body };
        res.json(livros[indice]);
    } else {
        res.status(404).json({ mensagem: "Livro não encontrado para atualizar" });
    }
});

// 6. [DELETE] Remover um livro
app.delete('/livros/:id', (req, res) => {
    const indice = livros.findIndex(l => l.id == req.params.id);
    if (indice !== -1) {
        const removido = livros.splice(indice, 1);
        res.json({ mensagem: `Livro '${removido[0].titulo}' removido com sucesso` });
    } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
    }
});

// Inicialização
app.listen(PORTA, () => {
    console.log(` API Biblioteca rodando em http://localhost:${PORTA}`);
});