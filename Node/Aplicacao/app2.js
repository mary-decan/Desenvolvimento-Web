const logger = require('./logger');

console.log("===== INICIANDO SIMULAÇÃO DE LOGS =====");


logger.registrarLog("Sistema iniciado");


setTimeout(() => {
    logger.registrarLog("Usuário 'Sara' acessou o sistema");
}, 1000);

setTimeout(() => {
    logger.registrarLog("Sistema encerrado");
    console.log("=======================================");
    console.log("Verifique o arquivo 'logs.txt' para ver os registros.");
}, 2000);