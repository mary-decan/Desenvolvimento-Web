const path = require('path');

const montarCaminho = (nomeArquivo) => {
    return path.join(__dirname, 'downloads', nomeArquivo);
};

module.exports = { montarCaminho };