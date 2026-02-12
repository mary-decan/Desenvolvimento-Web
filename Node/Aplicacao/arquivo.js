const fs = require('fs');


const criarArquivo = (nome, conteudo) => {
    try {
        fs.writeFileSync(nome, conteudo);
        console.log(`✅ Arquivo "${nome}" criado com sucesso!`);
    } catch (erro) {
        console.log("❌ Erro ao criar arquivo:", erro);
    }
};


const lerArquivo = (nome) => {
    try {
        if (fs.existsSync(nome)) {
            const conteudo = fs.readFileSync(nome, 'utf8');
            return conteudo;
        } else {
            return "❌ Erro: Arquivo não encontrado.";
        }
    } catch (erro) {
        return "❌ Erro ao ler arquivo.";
    }
};

module.exports = { criarArquivo, lerArquivo };