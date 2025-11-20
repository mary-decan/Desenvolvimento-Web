const readline = require('readline-sync');
function verificarMaioridade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade.");
    } else {
        console.log("Menor de idade.");
    }
}

console.log("\n--- 7.2 Função que Indica Maioridade ---");
let entradaIdade = readline.question("Digite sua idade: ");
let idade = parseInt(entradaIdade);

if (!isNaN(idade) && idade >= 0) {
    verificarMaioridade(idade);
} else {
    console.log("Idade inválida.");
}15