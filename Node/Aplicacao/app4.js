const caminhos = require('./caminhos');

const arquivos = ['relatorio.pdf', 'foto.png', 'config.json'];

console.log("===== GERADOR DE CAMINHOS ABSOLUTOS =====");

arquivos.forEach(arquivo => {
    const caminhoCompleto = caminhos.montarCaminho(arquivo);
    console.log(`Arquivo: ${arquivo}`);
    console.log(`Caminho: ${caminhoCompleto}`);
    console.log("-----------------------------------------");
});