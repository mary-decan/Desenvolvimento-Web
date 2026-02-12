const gerenciador = require('./arquivo');

const nomeDoArquivo = "log.txt";
const mensagem = "Registro de atividade: Agente Sara logou no sistema às " + new Date().toLocaleString();

console.log("===== SISTEMA DE ARQUIVOS =====");


gerenciador.criarArquivo(nomeDoArquivo, mensagem);


console.log("\nLendo conteúdo do arquivo...");
const resultado = gerenciador.lerArquivo(nomeDoArquivo);

console.log("-------------------------------");
console.log(resultado);
console.log("-------------------------------");