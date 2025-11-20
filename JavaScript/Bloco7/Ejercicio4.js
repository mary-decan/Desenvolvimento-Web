const readline = require('readline-sync');
function ehPositivo(numero) {
  
    return numero > 0;
}

console.log("\n--- 7.4 Função com Retorno Booleano ---");
let numero = parseFloat(readline.question("Digite um numero: "));

if (!isNaN(numero)) {

    if (ehPositivo(numero)) {
        console.log(`O numero ${numero} é positivo.`);
    } else {
        console.log(`O numero ${numero} não é positivo (e zero ou negativo).`);
    }
} else {
    console.log("Entrada invalida.");
}