const fs = require('fs');

const registrar = (evento) => {
    const log = `[${new Date().toLocaleString()}] EVENTO: ${evento}\n`;
    fs.appendFileSync('atividades.log', log);
};

module.exports = { registrar };