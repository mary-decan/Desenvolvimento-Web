const express = require("express");
const router = express.Router();

let usuarios = [];
let idAtual = 1;


function criarUsuario(dados) {
  if (!dados.nome || !dados.idade) throw new Error("Nome e idade são obrigatórios");
  const novo = { id: idAtual++, nome: dados.nome, idade: Number(dados.idade) };
  usuarios.push(novo);
  return novo;
}


router.get("/", (req, res) => res.json(usuarios));
router.post("/", (req, res) => {
  try {
    const novo = criarUsuario(req.body);
    res.status(201).json(novo);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});


router.delete("/:id", (req, res) => {
    const idParaRemover = Number(req.params.id);
    
    
    const totalAntes = usuarios.length;
    usuarios = usuarios.filter(u => u.id !== idParaRemover);
    
    if (usuarios.length < totalAntes) {
        res.status(204).send(); 
    } else {
        res.status(404).json({ erro: "Usuário não encontrado" });
    }
});

module.exports = router;