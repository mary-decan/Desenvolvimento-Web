const readline = require('readline-sync');
console.log("--- 1. Classificação de Número ---");
let entrada1 = readline.question("Digite um numero: ");
let numero1 = parseFloat(entrada1);

if (!isNaN(numero1)) {
    if (numero1 > 0) {
        console.log(`O numero ${numero1} e POSITIVO.`);
    } else if (numero1 < 0) {
        console.log(`O numero ${numero1} e NEGATIVO.`);
    } else {
        console.log(`O numero e ZERO.`);
    }
} else {
    console.log("Entrada invalida.");
}