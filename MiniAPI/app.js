const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando!');
  });

  const usuarios = [];

  app.get('/usuarios', (req, res) => {
    res.json(usuarios);
  });

  app.post('/usuarios', (req, res) => {

    const usuario = req.body;
  
    usuarios.push(usuario);
  
    res.status(201).json(usuario);
  
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
