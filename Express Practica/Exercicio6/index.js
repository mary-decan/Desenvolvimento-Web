app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    

    const existe = produtos.find(p => p.id === parseInt(id));

    if (!existe) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    const novaLista = produtos.filter(p => p.id !== parseInt(id));
    
 
    produtos.length = 0;
    produtos.push(...novaLista); 

 
    res.json({ mensagem: "Produto removido com sucesso!" });
});