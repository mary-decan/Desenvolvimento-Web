const express = require('express');
const router = express.Router();



let usuarios = [];
let proximoId = 1;

function buscarUsuarioPorId(id) {
    return usuarios.find(u => u.id === parseInt(id));
}

function validarDadosUsuario(nome, idade, email) {
    if (!nome || nome.length < 3) return "O nome deve ter no mínimo 3 caracteres.";
    if (idade === undefined || idade < 0 || idade > 120) return "Idade inválida (deve ser entre 0 e 120).";
    if (!email || !email.includes("@")) return "E-mail inválido.";
    return null; 
}


router.post('/', (req, res) => {
    const { nome, idade, email } = req.body;

    const erro = validarDadosUsuario(nome, idade, email);
    if (erro) return res.status(400).json({ erro });

    const novoUsuario = { id: proximoId++, nome, idade, email };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});


router.get('/', (req, res) => res.json(usuarios));


router.get('/:id', (req, res) => {
    const usuario = buscarUsuarioPorId(req.params.id);
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.json(usuario);
});


router.put('/:id', (req, res) => {
    const usuario = buscarUsuarioPorId(req.params.id);
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });

    const { nome, idade, email } = req.body;
    const erro = validarDadosUsuario(nome, idade, email);
    if (erro) return res.status(400).json({ erro });

    usuario.nome = nome;
    usuario.idade = idade;
    usuario.email = email;

    res.json(usuario);
});

router.delete('/:id', (req, res) => {
    const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ erro: "Usuário não encontrado" });

    usuarios.splice(index, 1);
    res.status(204).send(); 
});

module.exports = router;