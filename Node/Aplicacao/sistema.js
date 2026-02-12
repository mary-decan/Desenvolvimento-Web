const os = require('os');

const mostrarInfoSistema = () => {
    const memoriaTotalGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const memoriaLivreGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

    console.log("===== INFORMAÇÕES DO SISTEMA =====");
    console.log(`Sistema Operacional: ${os.type()} (${os.platform()})`);
    console.log(`Arquitetura:         ${os.arch()}`);
    console.log(`Memória Total:       ${memoriaTotalGB} GB`);
    console.log(`Memória Livre:       ${memoriaLivreGB} GB`);
    console.log("==================================");
};

module.exports = { mostrarInfoSistema };