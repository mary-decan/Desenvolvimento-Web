app.put('/produtos/:id', (req, res) => {
    const { id } = req.params; 
    const { nome, preco } = req.body; 


    const index = produtos.findIndex(p => p.id === parseInt(id));

    
    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }


    produtos[index] = {
        id: parseInt(id),
        nome,
        preco
    };

    res.json(produtos[index]);
});