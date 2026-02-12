const msgs = require('./mensagens');

const usuario = "Sara";

console.log("=====================================");
console.log(`SISTEMA DE: ${msgs.autorSistema}`);
console.log("=====================================");


console.log(msgs.boasVindas(usuario));
console.log(msgs.despedida(usuario));

console.log("=====================================");