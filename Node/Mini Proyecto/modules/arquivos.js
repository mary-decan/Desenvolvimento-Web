const fs = require('fs');

const salvarDados = (dados) => {
    fs.writeFileSync('banco.json', JSON.stringify(dados, null, 2));
};

const carregarDados = () => {
    if (!fs.existsSync('banco.json')) return [];
    const conteudo = fs.readFileSync('banco.json', 'utf-8');
    return JSON.parse(conteudo);
};

module.exports = { salvarDados, carregarDados };