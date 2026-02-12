const fs = require('fs');

const registrarLog = (mensagem) => {
    const agora = new Date().toLocaleString();
    
 
    const linhaLog = `[${agora}] ${mensagem}\n`;

    try {
        fs.appendFileSync('logs.txt', linhaLog);
        console.log(`Log registrado: ${mensagem}`);
    } catch (erro) {
        console.log("Erro ao gravar log:", erro);
    }
};

module.exports = { registrarLog };